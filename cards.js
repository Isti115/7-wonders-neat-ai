import { CardType, ResourceType, ScienceType } from './types.js'

const {
  COMMERCE,
  CULTURE,
  GUILD,
  MANUFACTURED_GOODS,
  MILITARY,
  NATURAL_GOODS,
  SCIENCE,
} = CardType
const {
  CLAY,
  ORE,
  STONE,
  WOOD,
  GLASS,
  LOOM,
  PAPYRUS,
} = ResourceType
const {
  CALIPERS,
  GEARS,
  PLATE,
} = ScienceType

import Choice from './Choice.js'
import Card from './Card.js'

const natural = [
  // Single
  ...[3, 4].map(playerCount => new Card({
    name: 'Lumber Yard', playerCount, age: 1,
    type: NATURAL_GOODS,
    products: [ WOOD ],
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Stone Pit', playerCount, age: 1,
    type: NATURAL_GOODS,
    products: [ STONE ],
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Clay Pool', playerCount, age: 1,
    type: NATURAL_GOODS,
    products: [ CLAY ],
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Ore Vein', playerCount, age: 1,
    type: NATURAL_GOODS,
    products: [ ORE ],
  })),

  // Double
  ...[3, 4].map(playerCount => new Card({
    name: 'Sawmill', playerCount, age: 2,
    type: NATURAL_GOODS,
    cost: 1,
    products: [ WOOD, WOOD ],
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Quarry', playerCount, age: 2,
    type: NATURAL_GOODS,
    cost: 1,
    products: [ STONE, STONE ],
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Brickyard', playerCount, age: 2,
    type: NATURAL_GOODS,
    cost: 1,
    products: [ CLAY, CLAY ],
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Foundry', playerCount, age: 2,
    type: NATURAL_GOODS,
    cost: 1,
    products: [ ORE, ORE ],
  })),

  // Combined
  ...[6].map(playerCount => new Card({
    name: 'Tree Farm', playerCount, age: 1,
    type: NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ WOOD, CLAY ]) ],
  })),
  ...[4].map(playerCount => new Card({
    name: 'Excavation', playerCount, age: 1,
    type: NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ STONE, CLAY ]) ],
  })),
  ...[3].map(playerCount => new Card({
    name: 'Clay Pit', playerCount, age: 1,
    type: NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ CLAY, ORE ]) ],
  })),
  ...[3].map(playerCount => new Card({
    name: 'Timber Yard', playerCount, age: 1,
    type: NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ STONE, WOOD ]) ],
  })),
  ...[5].map(playerCount => new Card({
    name: 'Forest Cave', playerCount, age: 1,
    type: NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ WOOD, ORE ]) ],
  })),
  ...[6].map(playerCount => new Card({
    name: 'Mine', playerCount, age: 1,
    type: NATURAL_GOODS,
    cost: 1,
    products: [ new Choice([ ORE, STONE ]) ],
  })),
]

const manufactured = [
  ...[3, 6].map(playerCount => new Card({
    name: 'Loom', playerCount, age: 1,
    type: MANUFACTURED_GOODS,
    products: [ LOOM ],
  })),
  ...[3, 6].map(playerCount => new Card({
    name: 'Glassworks', playerCount, age: 1,
    type: MANUFACTURED_GOODS,
    products: [ GLASS ],
  })),
  ...[3, 6].map(playerCount => new Card({
    name: 'Press', playerCount, age: 1,
    type: MANUFACTURED_GOODS,
    products: [ PAPYRUS ],
  })),

  ...[3, 5].map(playerCount => new Card({
    name: 'Loom', playerCount, age: 2,
    type: MANUFACTURED_GOODS,
    products: [ LOOM ],
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Glassworks', playerCount, age: 2,
    type: MANUFACTURED_GOODS,
    products: [ GLASS ],
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Press', playerCount, age: 2,
    type: MANUFACTURED_GOODS,
    products: [ PAPYRUS ],
  })),
]

const military = [
  ...[3, 7].map(playerCount => new Card({
    name: 'Stockade', playerCount, age: 1,
    cost: [ WOOD ],
    type: MILITARY,
    shield: 1,
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Barracks', playerCount, age: 1,
    cost: [ ORE ],
    type: MILITARY,
    shield: 1,
  })),
  ...[3, 4].map(playerCount => new Card({
    name: 'Guard Tower', playerCount, age: 1,
    cost: [ CLAY ],
    type: MILITARY,
    shield: 1,
  })),
  ...[3, 7].map(playerCount => new Card({
    name: 'Walls', playerCount, age: 2,
    cost: [ STONE, STONE, STONE ],
    type: MILITARY,
    shield: 2,
  })),
  ...[4, 6, 7].map(playerCount => new Card({
    name: 'Training Ground', playerCount, age: 2,
    cost: [ WOOD, ORE, ORE ],
    type: MILITARY,
    shield: 2,
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Stables', playerCount, age: 2,
    cost: [ ORE, CLAY, WOOD ],
    type: MILITARY,
    shield: 2,
  })),
  ...[3, 6].map(playerCount => new Card({
    name: 'Archery Range', playerCount, age: 2,
    cost: [ WOOD, WOOD, ORE ],
    type: MILITARY,
    shield: 2,
  })),
  ...[3, 7].map(playerCount => new Card({
    name: 'Fortifications', playerCount, age: 3,
    cost: [ STONE, ORE, ORE, ORE ],
    type: MILITARY,
    shield: 3,
  })),
  ...[3, 5, 6].map(playerCount => new Card({
    name: 'Circus', playerCount, age: 3,
    cost: [ STONE, STONE, STONE, ORE ],
    type: MILITARY,
    shield: 3,
  })),
  ...[3, 4, 7].map(playerCount => new Card({
    name: 'Arsenal', playerCount, age: 3,
    cost: [ ORE, WOOD, WOOD, LOOM ],
    type: MILITARY,
    shield: 3,
  })),
  ...[3, 5].map(playerCount => new Card({
    name: 'Siege Workshop', playerCount, age: 3,
    cost: [ WOOD, CLAY, CLAY, CLAY ],
    type: MILITARY,
    shield: 3,
  })),
]

const culture = [

]

const commerce = [
  ...[3, 7].map(playerCount => new Card({
    name: 'East Trading Post', playerCount, age: 1, type: COMMERCE,
  })),
  ...[3, 7].map(playerCount => new Card({
    name: 'West Trading Post', playerCount, age: 1, type: COMMERCE,
  })),
  ...[3, 6].map(playerCount => new Card({
    name: 'Marketplace', playerCount, age: 1, type: COMMERCE,
  })),
]

const science = [

]

const guild = [

]

const cards = [
  ...natural,
  ...manufactured,
  ...military,
  ...commerce,
  ...culture,
  ...science,
  ...guild,
].map(c => {
  if (c.cost.constructor.name === 'Array') {
    c.cost.sort()
  }

  return c
})

export default cards

export const byName = Object.fromEntries(cards.map(
  // c => [ c.name.toLowerCase().replace(' ', '-'), c ]
  c => [ c.name.replace(' ', ''), c ]
))
