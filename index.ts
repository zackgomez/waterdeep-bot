import {
  WDMandatoryQuest,
  WDQuest,
  WDIntrigueCard,
  WDLord,
  WDAdventurers,
  WDBuilding,
  Buildings,
  IntrigueCards,
  MandatoryQuests,
  Quests,
  LordCards,
  WDLocation,
  WDRewards,
  BaseLocations,
  Adventurers,
} from './WDData';
import * as _ from 'lodash';
import { Z_FILTERED } from 'zlib';

interface WDPlayer {
  index: number;

  agents: number;
  adventurers: WDAdventurers;
  gold: number;
  vp: number;

  lord: WDLord;
  intrigue_cards: Array<WDIntrigueCard | WDMandatoryQuest>;
  quests: Array<WDQuest>;
  mandatory_quests: Array<WDMandatoryQuest>;
  completed_quests: Array<WDQuest>;
}

type WDGamePhase =
  | 'setup'
  | 'start_of_round'
  | 'assign_agents'
  | 'reassign_agents';

interface WDMove {
  player_index: number;
}

interface WDBuildingOfferEntry {
  building: WDBuilding;
  vps: number;
}

function makePlayer(index: number, lord: WDLord): WDPlayer {
  return {
    index,

    agents: 0,
    adventurers: {
      cleric: 0,
      fighter: 0,
      rogue: 0,
      wizard: 0,
    },
    gold: 0,
    vp: 0,

    lord,

    intrigue_cards: [],
    quests: [],
    mandatory_quests: [],
    completed_quests: [],
  };
}

interface WDPlayableLocation {
  name: string;
  assign_cost?: number;
  rewards: WDRewards;
  owner_rewards?: WDRewards;
  // owner?
  // existing agents?
}

type WDGameMove = {
  type: 'assign_agent_to_location';
  player: WDPlayer;
  location: WDPlayableLocation;
};

class WDGame {
  current_round: number = 0;
  current_phase: WDGamePhase = 'setup';

  first_player_index: number = 0;
  current_player_index: number = 0;
  players: Array<WDPlayer> = [];

  location_to_played_agent_owners: {
    [location_name: string]: Array<number>;
  } = {};

  building_offer: Array<WDBuildingOfferEntry> = [];
  quest_offer: Array<WDQuest> = [];

  built_buildings_and_owners: Array<[WDBuilding, number]> = [];

  adventurer_supply: WDAdventurers = {
    cleric: 25,
    fighter: 25,
    rogue: 25,
    wizard: 25,
  };
  intrigue_deck: Array<WDIntrigueCard | WDMandatoryQuest> = [];
  building_deck: Array<WDBuilding> = [];
  quest_deck: Array<WDQuest> = [];

  intrigue_discard: Array<WDIntrigueCard | WDMandatoryQuest> = [];
  building_discard: Array<WDBuilding> = [];
  quest_discard: Array<WDQuest> = [];

  constructor() {}

  getMoves() {
    switch (this.current_phase) {
      case 'assign_agents': {
        const player = this.players[this.current_player_index];

        const locations = this.getAvailableLocations();

        const location_moves = locations.map((location) => ({
          type: 'assign_agent_to_location',
          location,
          player,
        }));
        return location_moves;
      }
    }
    return null;
  }

  playMove(move: WDGameMove) {
    const { player } = move;
    switch (move.type) {
      case 'assign_agent_to_location': {
        const { location } = move;

        player.agents -= 1;
        this.location_to_played_agent_owners[location.name] = (
          this.location_to_played_agent_owners[location.name] || []
        ).concat([player.index]);

        this.givePlayerRewards(player, location.rewards);

        // next action
        player, 'complete_quest';
        break;
      }
    }
  }

  private givePlayerRewards(player: WDPlayer, rewards: WDRewards) {
    player.adventurers.cleric += rewards.cleric || 0;
    player.adventurers.fighter += rewards.fighter || 0;
    player.adventurers.rogue += rewards.rogue || 0;
    player.adventurers.wizard += rewards.wizard || 0;

    player.gold += rewards.gold || 0;
    player.vp += rewards.vp || 0;

    const intrigue_count = rewards.intrigue || 0;
    if (intrigue_count > 0) {
      player.intrigue_cards = player.intrigue_cards.concat(
        this.drawIntrigueCards(intrigue_count)
      );
    }

    if (rewards.wild) {
      // ask player
    }

    if (rewards.special) {
      // TODO
    }
  }

  private getAvailableLocations(): Array<WDPlayableLocation> {
    let ret: Array<WDPlayableLocation> = [];

    ret = ret.concat(
      BaseLocations.filter((loc) => {
        const agents = this.location_to_played_agent_owners[loc.name];
        return !agents || agents.length === 0;
      })
    );

    ret = this.built_buildings_and_owners
      .filter(([bldg, _]) => {
        const agents = this.location_to_played_agent_owners[bldg.name];
        return !agents || agents.length === 0;
      })
      .map(([bldg, _]) => bldg);

    return ret;
  }

  setupGame() {
    this.intrigue_deck = _.shuffle([...IntrigueCards, ...MandatoryQuests]);
    this.building_deck = [...Buildings];
    this.quest_deck = _.shuffle([...Quests]);

    this.fillBuildingOffer();

    // two players for now
    const lords = _.take(_.shuffle(LordCards), 2);
    this.players.push(makePlayer(this.players.length, lords[0]));
    this.players.push(makePlayer(this.players.length, lords[1]));

    this.players.forEach((player, i) => {
      player.quests.push(this.quest_deck.pop()!);
      player.quests.push(this.quest_deck.pop()!);

      player.intrigue_cards.push(this.intrigue_deck.pop()!);
      player.intrigue_cards.push(this.intrigue_deck.pop()!);

      player.gold = 4 + i;
    });

    this.fillQuestOffer();

    this.current_phase = 'start_of_round';
  }

  setupRound() {
    this.current_round += 1;
    this.building_offer.forEach((e) => (e.vps += 1));
    this.current_player_index = this.first_player_index;

    if (this.current_round === 5) {
      this.players.forEach((p) => (p.agents += 1));
    }

    // resolve start of round effects on buildings
    // resolve plot quests

    this.current_phase = 'assign_agents';
  }

  fillBuildingOffer() {
    while (this.building_offer.length < 3) {
      const building = this.building_deck.pop()!;
      this.building_offer.push({
        building,
        vps: 0,
      });
    }
  }

  fillQuestOffer() {
    while (this.quest_offer.length < 4) {
      this.quest_offer.push(this.quest_deck.pop()!);
    }
  }

  private drawIntrigueCards(
    n: number
  ): Array<WDIntrigueCard | WDMandatoryQuest> {
    let ret: Array<WDIntrigueCard | WDMandatoryQuest> = [];
    // TODO reshuffle?
    while (this.intrigue_deck.length > 0 && n > 0) {
      ret.push(this.intrigue_deck.pop()!);
    }
    return ret;
  }
}

const game = new WDGame();
game.setupGame();
console.log(game);
