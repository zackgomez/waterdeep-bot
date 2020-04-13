export type WDAdventurer = 'cleric' | 'fighter' | 'rogue' | 'wizard';
export const Adventurers = ['cleric', 'fighter', 'rogue', 'wizard'];
export type WDAdventurers = {
  cleric: number;
  fighter: number;
  rogue: number;
  wizard: number;
};

export type WDRewards = Readonly<{
  special?: string;
  cleric?: number;
  fighter?: number;
  rogue?: number;
  wizard?: number;
  wild?: number;
  gold?: number;
  intrigue?: number;
  vp?: number;
}>;

export type WDLocation = Readonly<{
  name: string;
  rewards: WDRewards;
}>;

interface WDBuilding {
  name: string;
  build_cost: number;
  assign_cost?: number;
  rewards: WDRewards;
  owner_rewards: WDRewards;
}

export type WDQuestType =
  | 'Commerce'
  | 'Warfare'
  | 'Piety'
  | 'Arcana'
  | 'Skullduggery'
  | 'Mandatory';

export type WDQuestCost = Readonly<{
  cleric?: number;
  fighter?: number;
  rogue?: number;
  wizard?: number;
  gold?: number;
}>;

export type WDQuest = Readonly<{
  name: string;
  type: WDQuestType;
  cost: WDQuestCost;
  rewards: WDRewards;
  plot_reward?: string;
}>;

export type WDIntrigueCard = Readonly<{
  name: string;
  count: number;
  effect: string;
}>;

export type WDMandatoryQuest = Readonly<{
  name: string;
  cost: WDQuestCost;
  rewards: WDRewards;
}>;

export type WDLord = Readonly<{
  name: string;
  quest_types: Array<string>;
  building_lord?: boolean;
}>;

export const LordCards: Array<WDLord> = [
  {
    name: 'Brianne Byndraeth',
    quest_types: ['Arcana', 'Skullduggery'],
  },
  {
    name: 'Caladorn Cassalanter',
    quest_types: ['Warfare', 'Skullduggery'],
  },
  {
    name: 'Durnan the Wanderer',
    quest_types: ['Commerce', 'Warfare'],
  },
  {
    name: 'Khelben Arunsun, the Blackstaff',
    quest_types: ['Arcana', 'Warfare'],
  },
  {
    name: 'Kyriani Agrivar',
    quest_types: ['Arcana', 'Piety'],
  },
  {
    name: 'Larissa Neathal',
    quest_types: [],
    building_lord: true,
  },
  {
    name: 'Mirt the Moneylender',
    quest_types: ['Commerce', 'Piety'],
  },
  {
    name: 'Nindil Jalbuck',
    quest_types: ['Piety', 'Skullduggery'],
  },
  {
    name: 'Nymara Scheiron',
    quest_types: ['Commerce', 'Skullduggery'],
  },
  {
    name: 'Piergerion the Paladinson',
    quest_types: ['Piety', 'Warfare'],
  },
  {
    name: 'Sammereza Sulphontis',
    quest_types: ['Arcana', 'Commerce'],
  },
];

export const IntrigueCards: Array<WDIntrigueCard> = [
  {
    name: 'Ambush',
    count: 2,
    effect: 'opponent_remove_fighter_or_gain_fighter',
  },
  {
    name: 'Arcane Mishap',
    count: 2,
    effect: 'opponent_remove_wizard_or_gain_intrigue',
  },
  {
    name: 'Assassination',
    count: 2,
    effect: 'opponent_remove_rogue_or_gain_2_gold',
  },
  {
    name: 'Bribe Agent',
    count: 2,
    effect: 'play_opponents_location',
  },
  {
    name: 'Free Drinks!',
    count: 2,
    effect: 'take_wild_from_opponent',
  },
  {
    name: 'Lack of Faith',
    count: 2,
    effect: 'opponent_remove_cleric_or_gain_2_vp',
  },
  {
    name: 'Accelerate Plans',
    count: 1,
    effect: 'accelerate_plans',
  },
  {
    name: 'Bidding War',
    count: 3,
    effect: 'draw_and_pass_quests',
  },
  {
    name: 'Call for Adventurers',
    count: 2,
    effect: 'gain_two_wild_opponents_gain_one',
  },
  {
    name: 'Change of Plans',
    count: 1,
    effect: 'discard_quest_for_6vp_opponent_for_3vp',
  },
  {
    name: 'Conscription',
    count: 2,
    effect: '2_fighter_give_1_fighter',
  },
  {
    name: 'Crime Wave',
    count: 2,
    effect: '2_rogue_give_1_rogue',
  },
  {
    name: 'Good Faith',
    count: 2,
    effect: '2_cleric_give_1_cleric',
  },
  {
    name: 'Graduation Day',
    count: 2,
    effect: '2_wizard_give_1_wizard',
  },
  {
    name: 'Real Estate Deal',
    count: 1,
    effect: 'discard_building_build_free',
  },
  {
    name: 'Recall Agent',
    count: 2,
    effect: 'recall_agent',
  },
  {
    name: 'Recruit Spies',
    count: 1,
    effect: 'gain_from_supply_and_opponents(2, rogue, 1, 3vp)',
  },
  {
    name: 'Request Assistance',
    count: 1,
    effect: 'gain_from_supply_and_opponents(2, fighter, 1, 3vp)',
  },
  {
    name: 'Research Agreement',
    count: 1,
    effect: 'gain_from_supply_and_opponents(2, wizard, 1, 5vp)',
  },
  {
    name: 'Summon the Faithful',
    count: 1,
    effect: 'gain_from_supply_and_opponents(2, cleric, 1, 5vp)',
  },
  {
    name: 'Sample Wares',
    count: 2,
    effect: 'assign_to_builders_hall',
  },
  {
    name: 'Special Assignment',
    count: 2,
    effect: 'draw_quests_until_selected_type',
  },
  {
    name: 'Spread the Wealth',
    count: 2,
    effect: '4_gold_give_2_gold',
  },
  {
    name: 'Tax Collection',
    count: 2,
    effect: 'gain_from_supply_and_opponents(4, gold, 4, 4vp)',
  },
];

export const MandatoryQuests: Array<WDMandatoryQuest> = [
  {
    name: 'Fend Off Bandits',
    cost: { fighter: 2, wizard: 1 },
    rewards: { vp: 2 },
  },
  {
    name: 'Foil the Zhentarim',
    cost: { fighter: 1, rogue: 1, wizard: 1 },
    rewards: { vp: 2 },
  },
  {
    name: 'Placate Angry Merchants',
    cost: { cleric: 1, fighter: 1, wizard: 1 },
    rewards: { vp: 4 },
  },
  {
    name: 'Quell Riots',
    cost: { cleric: 2, fighter: 1 },
    rewards: { vp: 4 },
  },
  {
    name: 'Repel Drow Invaders',
    cost: { cleric: 1, rogue: 1 },
    rewards: { vp: 2 },
  },
  {
    name: 'Stamp Out Cultists',
    cost: { cleric: 1, fighter: 1, rogue: 1 },
    rewards: { vp: 2 },
  },
];

export const Quests: Array<WDQuest> = [
  {
    name: 'Lure Artisans of Mirabar',
    type: 'Commerce',
    cost: { cleric: 1, fighter: 1, rogue: 1, gold: 2 },
    rewards: { special: 'build_free', vp: 4 },
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
    cost: { cleric: 2, wizard: 1 },
    rewards: { special: 'choose_faceup_quest', vp: 8 },
  },
  {
    name: 'Discover Hidden Temple of Lolth',
    type: 'Piety',
    cost: { cleric: 2, fighter: 1, rogue: 1 },
    rewards: { special: 'choose_faceup_quest', vp: 10 },
  },
  {
    name: 'Form an Alliance with the Rashemi',
    type: 'Piety',
    cost: { cleric: 2, wizard: 1 },
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
    cost: { cleric: 1, rogue: 4 },
    rewards: { cleric: 2, vp: 4 },
  },
  {
    name: 'Produce a Miracle for the Masses',
    type: 'Piety',
    cost: { cleric: 2, gold: 4 },
    rewards: { vp: 5 },
    plot_reward: 'cleric => trade wild for cleric',
  },
  {
    name: "Explore Ahghairon's Tower",
    type: 'Arcana',
    cost: { fighter: 1, wizard: 2, gold: 2 },
    rewards: { special: 'when you get W, +1 I', vp: 6 },
    plot_reward: 'intrigue_on_wizard_gain',
  },
  {
    name: 'Fence Goods for Duke of Darkness',
    type: 'Skullduggery',
    cost: { fighter: 1, rogue: 3, gold: 4 },
    rewards: { special: 'when you get R, +2 G', vp: 6 },
    plot_reward: '2_gold_on_rogue_gain',
  },
  {
    name: 'Bolster Griffon Cavalry',
    type: 'Warfare',
    cost: { fighter: 4, gold: 4 },
    rewards: { special: 'when you get F, +1 F', vp: 6 },
    plot_reward: 'fighter_on_fighter_gain',
  },
  {
    name: 'Loot the Crypt of Chauntea',
    type: 'Commerce',
    cost: { cleric: 1, rogue: 3, gold: 2 },
    rewards: { intrigue: 1, special: 'random quest', vp: 7 },
  },
  {
    name: 'Domesticate Owlbears',
    type: 'Arcana',
    cost: { cleric: 1, wizard: 2 },
    rewards: { fighter: 1, gold: 2, vp: 8 },
  },
  {
    name: 'Study the Illusk Arch',
    type: 'Arcana',
    cost: { cleric: 1, wizard: 2 },
    rewards: { vp: 8 },
    plot_reward: '2vp_per_arcana_quest',
  },
  {
    name: 'Establish New Merchant Guild',
    type: 'Commerce',
    cost: { cleric: 1, fighter: 2, gold: 4 },
    rewards: { vp: 8 },
    plot_reward: '2vp_per_commerce_quest',
  },
  {
    name: 'Protect the House of Wonder',
    type: 'Piety',
    cost: { cleric: 2, fighter: 1, gold: 2 },
    rewards: { vp: 8 },
    plot_reward: '2vp_on_piety_quest',
  },
  {
    name: 'Install a Spy in Castle Waterdeep',
    type: 'Skullduggery',
    cost: { rogue: 4, gold: 4 },
    rewards: { vp: 8 },
    plot_reward: '2vp_on_skullduggery_quest',
  },
  {
    name: 'Quell Mercenary Uprising',
    type: 'Warfare',
    cost: { cleric: 1, fighter: 4 },
    rewards: { special: '+2 per future WQ', vp: 8 },
    plot_reward: '2vp_on_warfare_quest',
  },
  {
    name: "Infiltrate Builder's Hall",
    type: 'Commerce',
    cost: { fighter: 2, rogue: 2, gold: 4 },
    rewards: { special: '+4 per future building', vp: 6 },
    plot_reward: '4vp_on_building',
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
    cost: { cleric: 1, fighter: 3, rogue: 1 },
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
    cost: { cleric: 1, fighter: 1, rogue: 1, gold: 4 },
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
    cost: { cleric: 1, fighter: 1, rogue: 1, gold: 4 },
    rewards: { special: 'one opponent gains 4g', vp: 15 },
  },
  {
    name: 'Place a Sleeper Agent in Skullport',
    type: 'Skullduggery',
    cost: { fighter: 1, rogue: 4, wizard: 1 },
    rewards: { special: '+2 per future played Intrigue', vp: 0 },
    plot_reward: '2vp_on_intrigue_play',
  },
  {
    name: "Recover the Magister's Orb",
    type: 'Arcana',
    cost: { rogue: 3, wizard: 2 },
    rewards: { vp: 6 },
    plot_reward: 'use_opponents_space',
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
    cost: { cleric: 2, fighter: 2, rogue: 1 },
    rewards: { gold: 4, vp: 11 },
  },
  {
    name: 'Defeat Uprising from Undermountain',
    type: 'Warfare',
    cost: { cleric: 1, fighter: 3, rogue: 1, gold: 2 },
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
    cost: { cleric: 1, fighter: 1, wizard: 2 },
    rewards: { intrigue: 1, vp: 13 },
  },
  {
    name: 'Defend the Tower of Luck',
    type: 'Piety',
    cost: { cleric: 2, fighter: 1, rogue: 1, wizard: 1 },
    rewards: { vp: 0 },
    plot_reward: 'wild_per_round',
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
    cost: { cleric: 2, wizard: 1, gold: 4 },
    rewards: { fighter: 6, vp: 6 },
  },
  {
    name: 'Host Festival for Sune',
    type: 'Arcana',
    cost: { fighter: 2, wizard: 2, gold: 4 },
    rewards: { cleric: 2, vp: 9 },
  },
  {
    name: "Deliver Weapons to Selune's Temple",
    type: 'Warfare',
    cost: { fighter: 4, rogue: 1, wizard: 1, gold: 2 },
    rewards: { cleric: 2, vp: 9 },
  },
  {
    name: 'Placate the Walking Statue',
    type: 'Commerce',
    cost: { cleric: 2, rogue: 2, gold: 4 },
    rewards: { special: 'random free building', vp: 10 },
  },
  {
    name: 'Bribe the Shipwrights',
    type: 'Commerce',
    cost: { rogue: 4, wizard: 1, gold: 4 },
    rewards: { vp: 10 },
    plot_reward: 'rogue_on_gold_gain',
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
    cost: { cleric: 2, fighter: 2, gold: 4 },
    rewards: { cleric: 1, fighter: 1, vp: 12 },
  },
  {
    name: 'Repel Seawraiths',
    type: 'Warfare',
    cost: { cleric: 1, fighter: 4, wizard: 1 },
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
    cost: { cleric: 2, rogue: 3, gold: 4 },
    rewards: { vp: 20 },
  },
  {
    name: 'Recruit Lieutenant',
    type: 'Warfare',
    cost: { cleric: 1, fighter: 5, rogue: 1, wizard: 1 },
    rewards: { special: 'lieutenant', vp: 0 },
    plot_reward: 'lieutenant',
  },
  {
    name: 'Recruit Paladins for Tyr',
    type: 'Piety',
    cost: { cleric: 2, fighter: 4, gold: 4 },
    rewards: { cleric: 3, vp: 10 },
  },
  {
    name: 'Impersonate Adarbrent Noble',
    type: 'Commerce',
    cost: { cleric: 1, fighter: 2, rogue: 2, wizard: 1, gold: 4 },
    rewards: { intrigue: 2, vp: 18 },
  },
  {
    name: "Expose Red Wizards' Spies",
    type: 'Arcana',
    cost: { cleric: 1, fighter: 1, rogue: 2, wizard: 2, gold: 2 },
    rewards: { intrigue: 1, vp: 20 },
  },
  {
    name: 'Raid on Undermountain',
    type: 'Skullduggery',
    cost: { cleric: 1, fighter: 2, rogue: 4, wizard: 1 },
    rewards: { gold: 2, vp: 20 },
  },
  {
    name: 'Confront the Xanathar',
    type: 'Warfare',
    cost: { cleric: 1, fighter: 4, rogue: 2, wizard: 1 },
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
    cost: { cleric: 1, rogue: 3, wizard: 1, gold: 8 },
    rewards: { vp: 25 },
  },
  {
    name: 'Create a Shrine to Oghma',
    type: 'Piety',
    cost: { cleric: 5, gold: 2 },
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

export const Buildings: Array<WDBuilding> = [
  {
    name: 'Caravan Court',
    build_cost: 4,
    rewards: { special: 'fighter_acc' },
    owner_rewards: { fighter: 1 },
  },
  {
    name: 'Dragon Tower',
    build_cost: 3,
    rewards: { wizard: 1, intrigue: 1 },
    owner_rewards: { intrigue: 1 },
  },
  {
    name: 'Fetlock Court',
    build_cost: 8,
    rewards: { fighter: 2, wizard: 1 },
    owner_rewards: { special: 'choose(1, f, w)' },
  },
  {
    name: 'The Golden Horn',
    build_cost: 4,
    rewards: { special: 'gold_acc' },
    owner_rewards: { gold: 2 },
  },
  {
    name: 'Helmstar Warehouse',
    build_cost: 3,
    rewards: { rogue: 2, gold: 2 },
    owner_rewards: { rogue: 1 },
  },
  {
    name: "Heroes' Garden",
    build_cost: 4,
    rewards: { special: 'take_quest_bonus_4_vp_for_completing' },
    owner_rewards: { vp: 2 },
  },
  {
    name: 'House of Good Spirits',
    build_cost: 3,
    rewards: { fighter: 1, wild: 1 },
    owner_rewards: { fighter: 1 },
  },
  {
    name: 'House of Heroes',
    build_cost: 8,
    rewards: { fighter: 2, cleric: 1 },
    owner_rewards: { special: 'choose(1, f, p)' },
  },
  {
    name: 'House of the Moon',
    build_cost: 3,
    rewards: { cleric: 1, special: 'choose_faceup_quest' },
    owner_rewards: { gold: 2 },
  },
  {
    name: 'House of Wonder',
    build_cost: 4,
    assign_cost: 2,
    rewards: { special: 'choose(2, w, p)' },
    owner_rewards: { gold: 2 },
  },
  {
    name: "Jesters' Court",
    build_cost: 4,
    rewards: { special: 'rogue_acc' },
    owner_rewards: { rogue: 1 },
  },
  {
    name: 'New Olamn',
    build_cost: 8,
    rewards: { rogue: 2, wizard: 1 },
    owner_rewards: { special: 'choose(1, r, w)' },
  },
  {
    name: 'Northgate',
    build_cost: 3,
    rewards: { wild: 1, gold: 2 },
    owner_rewards: { vp: 2 },
  },
  {
    name: 'The Palace of Waterdeep',
    build_cost: 4,
    rewards: { special: 'ambassador' },
    owner_rewards: { vp: 2 },
  },
  {
    name: 'The Skulkway',
    build_cost: 4,
    rewards: { fighter: 1, rogue: 1, gold: 2 },
    owner_rewards: { special: 'choose(1, f, r)' },
  },
  {
    name: "Smuggler's Dock",
    build_cost: 4,
    assign_cost: 2,
    rewards: { special: 'choose(4, f, r)' },
    owner_rewards: { gold: 2 },
  },
  {
    name: 'Spires of the Morning',
    build_cost: 4,
    rewards: { special: 'cleric_acc' },
    owner_rewards: { vp: 2 },
  },
  {
    name: 'The Stone House',
    build_cost: 4,
    rewards: { special: 'gold_per_building' },
    owner_rewards: { gold: 2 },
  },
  {
    name: 'The Three Pearls',
    build_cost: 4,
    rewards: { special: 'trade_2_wild_for_3_wild' },
    owner_rewards: { gold: 2 },
  },
  {
    name: 'The Tower of Luck',
    build_cost: 8,
    rewards: { cleric: 1, rogue: 2 },
    owner_rewards: { special: 'choose(1, p, r)' },
  },
  {
    name: 'Tower of the Order',
    build_cost: 4,
    rewards: { special: 'wizard_acc' },
    owner_rewards: { intrigue: 1 },
  },
  {
    name: 'The Waymoot',
    build_cost: 4,
    rewards: { special: 'vp_acc_and_take_faceup_quest' },
    owner_rewards: { vp: 2 },
  },
  {
    name: 'The Yawning Portal',
    build_cost: 4,
    rewards: { wild: 2 },
    owner_rewards: { wild: 1 },
  },
  {
    name: 'The Zoarstar',
    build_cost: 8,
    rewards: { special: 'use_opponents_space' },
    owner_rewards: { vp: 2 },
  },
];

export const BaseLocations: ReadonlyArray<WDLocation> = [
  {
    name: 'Field of Triumph',
    rewards: { fighter: 2 },
  },
  {
    name: 'The Plinth',
    rewards: { cleric: 1 },
  },
  {
    name: 'Blackstaff Tower',
    rewards: { wizard: 1 },
  },
  {
    name: 'The Grinning Lion Tavern',
    rewards: { rogue: 2 },
  },
  {
    name: "Aurora's Realms Shop",
    rewards: { gold: 4 },
  },
  {
    name: 'Castle Waterdeep',
    rewards: { intrigue: 1, special: 'first_player' },
  },
  {
    name: "Builder's Hall",
    rewards: { special: 'build' },
  },
  {
    name: 'Waterdeep Harbor 1',
    rewards: { special: 'play_intrigue' },
  },
  {
    name: 'Waterdeep Harbor 2',
    rewards: { special: 'play_intrigue' },
  },
  {
    name: 'Waterdeep Harbor 3',
    rewards: { special: 'play_intrigue' },
  },
  {
    name: 'Cliffwatch Inn 1',
    rewards: { gold: 2, special: 'choose_faceup_quest' },
  },
  {
    name: 'Cliffwatch Inn 2',
    rewards: { intrigue: 1, special: 'choose_faceup_quest' },
  },
  {
    name: 'Cliffwatch Inn 3',
    rewards: { gold: 2, special: 'reset_quests' },
  },
];
