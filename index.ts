type WDRewards = {
  special?: string;
  fighter?: number;
  priest?: number;
  wizard?: number;
  rogue?: number;
  wild?: number;
  gold?: number;
  intrigue?: number;
  vp?: number;
};

type WDLocation = {
  name: string;
  rewards: WDRewards;
};

type WDBuilding = {
  name: string;
  build_cost: number;
  assign_cost?: number;
  rewards: WDRewards;
  owner_rewards: WDRewards;
};

type WDQuestType = 'Commerce' | 'Warfare' | 'Piety' | 'Arcana' | 'Skullduggery';
type WDQuestCost = {
  priest?: number;
  fighter?: number;
  rogue?: number;
  wizard?: number;
  gold?: number;
};

type WDQuest = {
  name: string;
  type: WDQuestType;
  cost: WDQuestCost;
  rewards: WDRewards;
};

const kQuests: Array<WDQuest> = [
  {
    name: 'Lure Artisans of Mirabar',
    type: 'Commerce',
    cost: { priest: 1, fighter: 1, rogue: 1, gold: 2 },
    rewards: { special: 'choose free building', vp: 4 },
  },
  {
    name: 'Train Bladesingers',
    type: 'Warfare',
    cost: { fighter: 3, wizard: 1 },
    rewards: { fighter: 1, wizard: 1, vp: 4 },
  },
  {
    name: 'Spy on the House of Light',
    type: 'Commerce',
    cost: { fighter: 3, rogue: 2 },
    rewards: { gold: 6, vp: 6 },
  },
  {
    name: 'Convert a Noble to Lathander',
    type: 'Piety',
    cost: { priest: 2, wizard: 1 },
    rewards: { special: 'choose_faceup_quest', vp: 8 },
  },
  {
    name: 'Discover Hidden Temple of Lolth',
    type: 'Piety',
    cost: { priest: 2, fighter: 1, rogue: 1 },
    rewards: { special: 'choose_faceup_quest', vp: 10 },
  },
  {
    name: 'Form an Alliance with the Rashemi',
    type: 'Piety',
    cost: { priest: 2, wizard: 1 },
    rewards: { special: 'choose_faceup_quest', vp: 10 },
  },
  {
    name: 'Research Chronomancy',
    type: 'Arcana',
    cost: { wizard: 2, gold: 4 },
    rewards: { wizard: 1, special: 'free agent placement', vp: 4 },
  },
  {
    name: 'Safeguard Eltorchul Mage',
    type: 'Commerce',
    cost: { fighter: 1, rogue: 1, wizard: 1, gold: 4 },
    rewards: { wizard: 2, vp: 4 },
  },
  {
    name: 'Expose Cult Corruption',
    type: 'Skullduggery',
    cost: { priest: 1, rogue: 4 },
    rewards: { priest: 2, vp: 4 },
  },
  {
    name: 'Produce a Miracle for the Masses',
    type: 'Piety',
    cost: { priest: 2, gold: 4 },
    rewards: { special: 'when you get C, trade adv.->C', vp: 5 },
  },
  {
    name: "Explore Ahghairon's Tower",
    type: 'Arcana',
    cost: { fighter: 1, wizard: 2, gold: 2 },
    rewards: { special: 'when you get W, +1 I', vp: 6 },
  },
  {
    name: 'Fence Goods for Duke of Darkness',
    type: 'Skullduggery',
    cost: { fighter: 1, rogue: 3, gold: 4 },
    rewards: { special: 'when you get R, +2 G', vp: 6 },
  },
  {
    name: 'Bolster Griffon Cavalry',
    type: 'Warfare',
    cost: { fighter: 4, gold: 4 },
    rewards: { special: 'when you get F, +1 F', vp: 6 },
  },
  {
    name: 'Loot the Crypt of Chauntea',
    type: 'Commerce',
    cost: { priest: 1, rogue: 3, gold: 2 },
    rewards: { intrigue: 1, special: 'random quest', vp: 7 },
  },
  {
    name: 'Domesticate Owlbears',
    type: 'Arcana',
    cost: { priest: 1, wizard: 2 },
    rewards: { fighter: 1, gold: 2, vp: 8 },
  },
  {
    name: 'Study the Illusk Arch',
    type: 'Arcana',
    cost: { priest: 1, wizard: 2 },
    rewards: { special: '+2 per future AQ', vp: 8 },
  },
  {
    name: 'Establish New Merchant Guild',
    type: 'Commerce',
    cost: { priest: 1, fighter: 2, gold: 4 },
    rewards: { special: '+2 per future CQ', vp: 8 },
  },
  {
    name: 'Protect the House of Wonder',
    type: 'Piety',
    cost: { priest: 2, fighter: 1, gold: 2 },
    rewards: { special: '+2 per future PQ', vp: 8 },
  },
  {
    name: 'Install a Spy in Castle Waterdeep',
    type: 'Skullduggery',
    cost: { rogue: 4, gold: 4 },
    rewards: { special: '+2 per future SQ', vp: 8 },
  },
  {
    name: 'Quell Mercenary Uprising',
    type: 'Warfare',
    cost: { priest: 1, fighter: 4 },
    rewards: { special: '+2 per future WQ', vp: 8 },
  },
  {
    name: "Infiltrate Builder's Hall",
    type: 'Commerce',
    cost: { fighter: 2, rogue: 2, gold: 4 },
    rewards: { special: '+4 per future building', vp: 6 },
  },
  {
    name: 'Establish Harpers Safe House',
    type: 'Skullduggery',
    cost: { fighter: 2, rogue: 3, gold: 2 },
    rewards: { special: '+2 per existing building', vp: 8 },
  },
  {
    name: 'Procure Stolen Goods',
    type: 'Skullduggery',
    cost: { rogue: 3, gold: 6 },
    rewards: { intrigue: 2, vp: 8 },
  },
  {
    name: 'Ambush Artor Morlin',
    type: 'Warfare',
    cost: { priest: 1, fighter: 3, rogue: 1 },
    rewards: { gold: 4, vp: 8 },
  },
  {
    name: 'Raid Orc Stronghold',
    type: 'Warfare',
    cost: { fighter: 4, rogue: 2 },
    rewards: { gold: 4, vp: 8 },
  },
  {
    name: 'Thin the City Watch',
    type: 'Commerce',
    cost: { priest: 1, fighter: 1, rogue: 1, gold: 4 },
    rewards: { rogue: 4, vp: 9 },
  },
  {
    name: 'Build a Reputation in Skullport',
    type: 'Skullduggery',
    cost: { fighter: 1, rogue: 3, gold: 4 },
    rewards: { intrigue: 1, vp: 10 },
  },
  {
    name: 'Send Aid to the Harpers',
    type: 'Commerce',
    cost: { priest: 1, fighter: 1, rogue: 1, gold: 4 },
    rewards: { special: 'one opponent gains 4g', vp: 15 },
  },
  {
    name: 'Place a Sleeper Agent in Skullport',
    type: 'Skullduggery',
    cost: { fighter: 1, rogue: 4, wizard: 1 },
    rewards: { special: '+2 per future played Intrigue', vp: 0 },
  },
  {
    name: "Recover the Magister's Orb",
    type: 'Arcana',
    cost: { rogue: 3, wizard: 2 },
    rewards: { special: 'use 1 occupied bldg per round', vp: 6 },
  },
  {
    name: 'Steal Spellbook from Silverhand',
    type: 'Arcana',
    cost: { fighter: 1, rogue: 2, wizard: 2 },
    rewards: { gold: 4, intrigue: 2, vp: 7 },
  },
  {
    name: 'Steal from House Adarbrent',
    type: 'Skullduggery',
    cost: { fighter: 1, rogue: 4, wizard: 1 },
    rewards: { gold: 6, vp: 10 },
  },
  {
    name: 'Retrieve Ancient Artifacts',
    type: 'Arcana',
    cost: { fighter: 2, rogue: 1, wizard: 2 },
    rewards: { gold: 4, vp: 11 },
  },
  {
    name: 'Eliminate Vampire Coven',
    type: 'Piety',
    cost: { priest: 2, fighter: 2, rogue: 1 },
    rewards: { gold: 4, vp: 11 },
  },
  {
    name: 'Defeat Uprising from Undermountain',
    type: 'Warfare',
    cost: { priest: 1, fighter: 3, rogue: 1, gold: 2 },
    rewards: { fighter: 2, vp: 11 },
  },
  {
    name: 'Deliver an Ultimatum',
    type: 'Warfare',
    cost: { fighter: 4, rogue: 1, wizard: 1 },
    rewards: { gold: 4, vp: 11 },
  },
  {
    name: 'Investigate Aberrant Infestation',
    type: 'Arcana',
    cost: { priest: 1, fighter: 1, wizard: 2 },
    rewards: { intrigue: 1, vp: 13 },
  },
  {
    name: 'Defend the Tower of Luck',
    type: 'Piety',
    cost: { priest: 2, fighter: 1, rogue: 1, wizard: 1 },
    rewards: { special: '1 adventurer per round', vp: 0 },
  },
  {
    name: 'Recruit for Blackstaff Academy',
    type: 'Arcana',
    cost: { fighter: 1, rogue: 1, wizard: 2, gold: 4 },
    rewards: { wizard: 3, vp: 6 },
  },
  {
    name: 'Heal Fallen Gray Hand Soldiers',
    type: 'Piety',
    cost: { priest: 2, wizard: 1, gold: 4 },
    rewards: { fighter: 6, vp: 6 },
  },
  {
    name: 'Host Festival for Sune',
    type: 'Arcana',
    cost: { fighter: 2, wizard: 2, gold: 4 },
    rewards: { priest: 2, vp: 9 },
  },
  {
    name: "Deliver Weapons to Selune's Temple",
    type: 'Warfare',
    cost: { fighter: 4, rogue: 1, wizard: 1, gold: 2 },
    rewards: { priest: 2, vp: 9 },
  },
  {
    name: 'Placate the Walking Statue',
    type: 'Commerce',
    cost: { priest: 2, rogue: 2, gold: 4 },
    rewards: { special: 'random free building', vp: 10 },
  },
  {
    name: 'Bribe the Shipwrights',
    type: 'Commerce',
    cost: { rogue: 4, wizard: 1, gold: 4 },
    rewards: { special: 'when you get G, +1 R', vp: 10 },
  },
  {
    name: 'Take Over Rival Organization',
    type: 'Skullduggery',
    cost: { fighter: 1, rogue: 2, wizard: 1, gold: 6 },
    rewards: { rogue: 4, vp: 10 },
  },
  {
    name: 'Perform the Penance of Duty',
    type: 'Piety',
    cost: { priest: 2, fighter: 2, gold: 4 },
    rewards: { priest: 1, fighter: 1, vp: 12 },
  },
  {
    name: 'Repel Seawraiths',
    type: 'Warfare',
    cost: { priest: 1, fighter: 4, wizard: 1 },
    rewards: { gold: 2, vp: 15 },
  },
  {
    name: 'Prison Break',
    type: 'Skullduggery',
    cost: { rogue: 4, wizard: 2, gold: 2 },
    rewards: { fighter: 2, special: 'play Intrigue', vp: 14 },
  },
  {
    name: "Seal Gate to Cyric's Realm",
    type: 'Piety',
    cost: { priest: 2, rogue: 3, gold: 4 },
    rewards: { vp: 20 },
  },
  {
    name: 'Recruit Lieutenant',
    type: 'Warfare',
    cost: { priest: 1, fighter: 5, rogue: 1, wizard: 1 },
    rewards: { special: 'lieutenant', vp: 0 },
  },
  {
    name: 'Recruit Paladins for Tyr',
    type: 'Piety',
    cost: { priest: 2, fighter: 4, gold: 4 },
    rewards: { priest: 3, vp: 10 },
  },
  {
    name: 'Impersonate Adarbrent Noble',
    type: 'Commerce',
    cost: { priest: 1, fighter: 2, rogue: 2, wizard: 1, gold: 4 },
    rewards: { intrigue: 2, vp: 18 },
  },
  {
    name: "Expose Red Wizards' Spies",
    type: 'Arcana',
    cost: { priest: 1, fighter: 1, rogue: 2, wizard: 2, gold: 2 },
    rewards: { intrigue: 1, vp: 20 },
  },
  {
    name: 'Raid on Undermountain',
    type: 'Skullduggery',
    cost: { priest: 1, fighter: 2, rogue: 4, wizard: 1 },
    rewards: { gold: 2, vp: 20 },
  },
  {
    name: 'Confront the Xanathar',
    type: 'Warfare',
    cost: { priest: 1, fighter: 4, rogue: 2, wizard: 1 },
    rewards: { gold: 2, vp: 20 },
  },
  {
    name: "Infiltrate Halaster's Circle",
    type: 'Arcana',
    cost: { wizard: 5, gold: 2 },
    rewards: { vp: 25 },
  },
  {
    name: 'Ally with House Thann',
    type: 'Commerce',
    cost: { priest: 1, rogue: 3, wizard: 1, gold: 8 },
    rewards: { vp: 25 },
  },
  {
    name: 'Create a Shrine to Oghma',
    type: 'Piety',
    cost: { priest: 5, gold: 2 },
    rewards: { vp: 25 },
  },
  {
    name: "Establish Shadow Thieves' Guild",
    type: 'Skullduggery',
    cost: { fighter: 1, rogue: 8, wizard: 1 },
    rewards: { vp: 25 },
  },
  {
    name: 'Bolster City Guard',
    type: 'Warfare',
    cost: { fighter: 9, rogue: 2 },
    rewards: { vp: 25 },
  },
];

const kBuildings: Array<WDBuilding> = [
  {
    name: 'Caravan Court',
    build_cost: 4,
    rewards: {
      special: 'fighter_acc',
    },
    owner_rewards: {
      fighter: 1,
    },
  },
  {
    name: 'Dragon Tower',
    build_cost: 3,
    rewards: {
      wizard: 1,
      intrigue: 1,
    },
    owner_rewards: {
      intrigue: 1,
    },
  },
  {
    name: 'Fetlock Court',
    build_cost: 8,
    rewards: {
      fighter: 2,
      wizard: 1,
    },
    owner_rewards: {
      special: 'choose(1, f, w)',
    },
  },
  {
    name: 'The Golden Horn',
    build_cost: 4,
    rewards: {
      special: 'gold_acc',
    },
    owner_rewards: { gold: 2 },
  },
  {
    name: 'Helmstar Warehouse',
    build_cost: 3,
    rewards: {
      rogue: 2,
      gold: 2,
    },
    owner_rewards: { rogue: 1 },
  },
  {
    name: "Heroes' Garden",
    build_cost: 4,
    rewards: {
      special: 'take_quest_bonus_4_vp_for_completing',
    },
    owner_rewards: { vp: 2 },
  },
  {
    name: 'House of Good Spirits',
    build_cost: 3,
    rewards: { fighter: 1, wild: 1 },
    owner_rewards: {
      fighter: 1,
    },
  },
  {
    name: 'House of Heroes',
    build_cost: 8,
    rewards: { fighter: 2, priest: 1 },
    owner_rewards: {
      special: 'choose(1, f, p)',
    },
  },
  {
    name: 'House of the Moon',
    build_cost: 3,
    rewards: {
      priest: 1,
      special: 'choose_faceup_quest',
    },
    owner_rewards: {
      gold: 2,
    },
  },
  {
    name: 'House of Wonder',
    build_cost: 4,
    assign_cost: 2,
    rewards: {
      special: 'choose(2, w, p)',
    },
    owner_rewards: {
      gold: 2,
    },
  },
  {
    name: "Jesters' Court",
    build_cost: 4,
    rewards: {
      special: 'rogue_acc',
    },
    owner_rewards: {
      rogue: 1,
    },
  },
  {
    name: 'New Olamn',
    build_cost: 8,
    rewards: {
      rogue: 2,
      wizard: 1,
    },
    owner_rewards: {
      special: 'choose(1, r, w)',
    },
  },
  {
    name: 'Northgate',
    build_cost: 3,
    rewards: {
      wild: 1,
      gold: 2,
    },
    owner_rewards: {
      vp: 2,
    },
  },
  {
    name: 'The Palace of Waterdeep',
    build_cost: 4,
    rewards: {
      special: 'ambassador',
    },
    owner_rewards: {
      vp: 2,
    },
  },
  {
    name: 'The Skulkway',
    build_cost: 4,
    rewards: {
      fighter: 1,
      rogue: 1,
      gold: 2,
    },
    owner_rewards: {
      special: 'choose(1, f, r)',
    },
  },
  {
    name: "Smuggler's Dock",
    build_cost: 4,
    assign_cost: 2,
    rewards: {
      special: 'choose(4, f, r)',
    },
    owner_rewards: {
      gold: 2,
    },
  },
  {
    name: 'Spires of the Morning',
    build_cost: 4,
    rewards: {
      special: 'priest_acc',
    },
    owner_rewards: {
      vp: 2,
    },
  },
  {
    name: 'The Stone House',
    build_cost: 4,
    rewards: {
      special: 'gold_per_building',
    },
    owner_rewards: {
      gold: 2,
    },
  },
  {
    name: 'The Three Pearls',
    build_cost: 4,
    rewards: {
      special: 'trade_2_wild_for_3_wild',
    },
    owner_rewards: {
      gold: 2,
    },
  },
  {
    name: 'The Tower of Luck',
    build_cost: 8,
    rewards: {
      priest: 1,
      rogue: 2,
    },
    owner_rewards: {
      special: 'choose(1, p, r)',
    },
  },
  {
    name: 'Tower of the Order',
    build_cost: 4,
    rewards: {
      special: 'wizard_acc',
    },
    owner_rewards: {
      intrigue: 1,
    },
  },
  {
    name: 'The Waymoot',
    build_cost: 4,
    rewards: {
      special: 'vp_acc_and_take_faceup_quest',
    },
    owner_rewards: {
      vp: 2,
    },
  },
  {
    name: 'The Yawning Portal',
    build_cost: 4,
    rewards: {
      wild: 2,
    },
    owner_rewards: {
      wild: 1,
    },
  },
  {
    name: 'The Zoarstar',
    build_cost: 8,
    rewards: {
      special: 'play_in_opponents_space',
    },
    owner_rewards: {
      vp: 2,
    },
  },
];

const kBaseLocations: Array<WDLocation> = [
  {
    name: 'Field of Triumph',
    rewards: {
      fighter: 2,
    },
  },
  {
    name: 'The Plinth',
    rewards: {
      priest: 1,
    },
  },
  {
    name: 'Blackstaff Tower',
    rewards: {
      wizard: 1,
    },
  },
  {
    name: 'The Grinning Lion Tavern',
    rewards: {
      rogue: 2,
    },
  },
  {
    name: "Aurora's Realms Shop",
    rewards: {
      gold: 4,
    },
  },
  {
    name: 'Castle Waterdeep',
    rewards: {
      intrigue: 1,
      special: 'first_player',
    },
  },
  {
    name: "Builder's Hall",
    rewards: {
      special: 'build',
    },
  },
  {
    name: 'Waterdeep Harbor 1',
    rewards: {
      special: 'play_intrigue',
    },
  },
  {
    name: 'Waterdeep Harbor 2',
    rewards: {
      special: 'play_intrigue',
    },
  },
  {
    name: 'Waterdeep Harbor 3',
    rewards: {
      special: 'play_intrigue',
    },
  },
  {
    name: 'Cliffwatch Inn 1',
    rewards: {
      gold: 2,
      special: 'choose_faceup_quest',
    },
  },
  {
    name: 'Cliffwatch Inn 2',
    rewards: {
      intrigue: 1,
      special: 'choose_faceup_quest',
    },
  },
  {
    name: 'Cliffwatch Inn 3',
    rewards: {
      gold: 2,
      special: 'reset_quests',
    },
  },
];

class Game {}
