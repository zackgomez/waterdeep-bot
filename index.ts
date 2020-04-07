
type WDLocation = {
  name: string,
}

const kBaseLocations : Array<WDLocation> = [{
  name: 'Field of Triumph',
  fighter: 2,
}, {
  name: 'The Plinth',
  priest: 1,
}, {
  name: 'Blackstaff Tower',
  wizard: 1,
}, {
  name: 'The Grinning Lion Tavern',
  rogue: 2,
}, {
  name: 'Aurora\'s Realms Shop',
  gold: 4,
}, {
  name: 'Castle Waterdeep',
  intrigue: 1,
  special: 'first_player',
}, {
  name: 'Builder\'s Hall',
  special: 'build',
}, {
  name: 'Waterdeep Harbor 1',
  special: 'waterdeep_harbor',
}, {
  name: 'Waterdeep Harbor 2',
  special: 'waterdeep_harbor',
}, {
  name: 'Waterdeep Harbor 3',
  special: 'waterdeep_harbor',
}, {
  name: 'Cliffwatch Inn 1',
  gold: 2,
  special: 'choose_faceup_quest',
}, {
  name: 'Cliffwatch Inn 2',
  intrigue: 1,
  special: 'choose_faceup_quest',
}, {
  name: 'Cliffwatch Inn 3',
  gold: 2,
  special: 'reset_quests',
}];


class Game {
}
