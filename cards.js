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

  //
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

  //
  ...[3, 4].map(playerCount => new Card({
    name: 'Press', playerCount, age: 1,
    type: CardType.MANUFACTURED_GOODS,
    products: [ ResourceType.PAPYRUS ],
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Glassworks', playerCount, age: 1,
    type: CardType.MANUFACTURED_GOODS,
    products: [ ResourceType.GLASS ],
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Loom', playerCount, age: 1,
    type: CardType.MANUFACTURED_GOODS,
    products: [ ResourceType.LOOM ],
  })),

  //
]
