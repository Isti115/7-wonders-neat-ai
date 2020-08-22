import repl from 'repl'

import cards, { byName } from './cards.js'
import Player from './Player.js'

const p = new Player()

p.cards.push(byName.ForestCave)
p.cards.push(byName.Brickyard)
p.cards.push(byName.TreeFarm)

Object.assign(repl.start({}).context, {
  cards,
  byName,
  Player,
  p,
})
