import { CardType, ResourceType, ScienceType } from './types.js'

import Choice from './Choice.js'
import Card from './Card.js'

export default [
  // Single natural
  ...[3, 4].map(playerCount => new Card({
    name: 'Lumber Yard', playerCount, age: 1,
    type: CardType.NATURAL_GOODS,
    products: [ ResourceType.WOOD ],
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Stone Pit', playerCount, age: 1,
    type: CardType.NATURAL_GOODS,
    products: [ ResourceType.STONE ],
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Clay Pool', playerCount, age: 1,
    type: CardType.NATURAL_GOODS,
    products: [ ResourceType.CLAY ],
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Ore Vein', playerCount, age: 1,
    type: CardType.NATURAL_GOODS,
    products: [ ResourceType.ORE ],
  })),

  // Double natural
  ...[3, 4].map(playerCount => new Card({
    name: 'Sawmill', playerCount, age: 2,
    type: CardType.NATURAL_GOODS,
    cost: 1,
    products: [ ResourceType.WOOD, ResourceType.WOOD ],
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Quarry', playerCount, age: 2,
    type: CardType.NATURAL_GOODS,
    cost: 1,
    products: [ ResourceType.STONE, ResourceType.STONE ],
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Brickyard', playerCount, age: 2,
    type: CardType.NATURAL_GOODS,
    cost: 1,
    products: [ ResourceType.CLAY, ResourceType.CLAY ],
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Foundry', playerCount, age: 2,
    type: CardType.NATURAL_GOODS,
    cost: 1,
    products: [ ResourceType.ORE, ResourceType.ORE ],
  })),

  // Combined natural
  ...[6].map(playerCount => new Card({
    name: 'Tree Farm', playerCount, age: 1,
    type: CardType.NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ ResourceType.WOOD, ResourceType.CLAY ]) ],
  })),
  ...[4].map(playerCount => new Card({
    name: 'Excavation', playerCount, age: 1,
    type: CardType.NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ ResourceType.STONE, ResourceType.CLAY ]) ],
  })),
  ...[3].map(playerCount => new Card({
    name: 'Clay Pit', playerCount, age: 1,
    type: CardType.NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ ResourceType.CLAY, ResourceType.ORE ]) ],
  })),
  ...[3].map(playerCount => new Card({
    name: 'Timber Yard', playerCount, age: 1,
    type: CardType.NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ ResourceType.STONE, ResourceType.WOOD ]) ],
  })),
  ...[5].map(playerCount => new Card({
    name: 'Forest Cave', playerCount, age: 1,
    type: CardType.NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ ResourceType.WOOD, ResourceType.ORE ]) ],
  })),
  ...[6].map(playerCount => new Card({
    name: 'Mine', playerCount, age: 1,
    type: CardType.NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ ResourceType.ORE, ResourceType.STONE ]) ],
  })),

  // Manufactured
  ...[3, 6].map(playerCount => new Card({
    name: 'Loom', playerCount, age: 1,
    type: CardType.MANUFACTURED_GOODS,
    products: [ ResourceType.LOOM ],
  })),
  ...[3, 6].map(playerCount => new Card({
    name: 'Glassworks', playerCount, age: 1,
    type: CardType.MANUFACTURED_GOODS,
    products: [ ResourceType.GLASS ],
  })),
  ...[3, 6].map(playerCount => new Card({
    name: 'Press', playerCount, age: 1,
    type: CardType.MANUFACTURED_GOODS,
    products: [ ResourceType.PAPYRUS ],
  })),

  ...[3, 5].map(playerCount => new Card({
    name: 'Loom', playerCount, age: 2,
    type: CardType.MANUFACTURED_GOODS,
    products: [ ResourceType.LOOM ],
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Glassworks', playerCount, age: 2,
    type: CardType.MANUFACTURED_GOODS,
    products: [ ResourceType.GLASS ],
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Press', playerCount, age: 2,
    type: CardType.MANUFACTURED_GOODS,
    products: [ ResourceType.PAPYRUS ],
  })),

  // Military
  ...[3, 7].map(playerCount => new Card({
    name: 'Stockade', playerCount, age: 1,
    cost = [ ResourceType.WOOD ],
    type: CardType.MILITARY,
    shield: 1,
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Barracks', playerCount, age: 1,
    cost = [ ResourceType.ORE ],
    type: CardType.MILITARY,
    shield: 1,
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Guard Tower', playerCount, age: 1,
    cost = [ ResourceType.CLAY ],
    type: CardType.MILITARY,
    shield: 1,
  })),
  ...[3, 7].map(playerCount => new Card({
    name: 'Walls', playerCount, age: 2,
    cost = [ ResourceType.STONE, ResourceType.STONE, ResourceType.STONE ],
    type: CardType.MILITARY,
    shield: 2,
  })),
  ...[4, 6, 7].map(playerCount => new Card({
    name: 'Training Ground', playerCount, age: 2,
    cost = [ ResourceType.WOOD, ResourceType.ORE, ResourceType.ORE ],
    type: CardType.MILITARY,
    shield: 2,
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Stables', playerCount, age: 2,
    cost = [ ResourceType.ORE, ResourceType.CLAY, ResourceType.WOOD ],
    type: CardType.MILITARY,
    shield: 2,
  })),
  ...[3, 6].map(playerCount => new Card({
    name: 'Archery Range', playerCount, age: 2,
    cost = [ ResourceType.WOOD, ResourceType.WOOD, ResourceType.ORE ],
    type: CardType.MILITARY,
    shield: 2,
  })),
  ...[3, 7].map(playerCount => new Card({
    name: 'Fortifications', playerCount, age: 3,
    cost = [ ResourceType.STONE, ResourceType.ORE, ResourceType.ORE, ResourceType.ORE ],
    type: CardType.MILITARY,
    shield: 3,
  })),
  ...[3, 5, 6].map(playerCount => new Card({
    name: 'Circus', playerCount, age: 3,
    cost = [ ResourceType.STONE, ResourceType.STONE, ResourceType.STONE, ResourceType.ORE ],
    type: CardType.MILITARY,
    shield: 3,
  })),
  ...[3, 4, 7].map(playerCount => new Card({
    name: 'Arsenal', playerCount, age: 3,
    cost = [ ResourceType.ORE, ResourceType.WOOD, ResourceType.WOOD, ResourceType.LOOM ],
    type: CardType.MILITARY,
    shield: 3,
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Siege Workshop', playerCount, age: 3,
    cost = [ ResourceType.WOOD, ResourceType.CLAY, ResourceType.CLAY, ResourceType.CLAY ],
    type: CardType.MILITARY,
    shield: 3,
  })),
]
