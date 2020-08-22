import cards, { byName } from './cards.js'
import { NaturalResourceTypes, ManufacturedResourceTypes } from './types.js'
import { getCombinations, getMissingResources } from './utilities.js'

export default class Player {
  constructor ({
    wonder,
  } = {}) {
    this.cards = []
    this.coins = 3
    this.neighbors = {
      left: undefined,
      right: undefined,
    }
    this.wonder = wonder
  }

  getResourceCombinations () {
    const allResources = [].concat(...this.cards.map(c => c.products))
    return getCombinations(allResources).map(c => c.sort())
  }

  getResourcePurchaseCost (resource, direction) {
    if ((
      NaturalResourceTypes.includes(resource) &&
        direction === 'left' &&
        this.cards.includes(byName.WestTradingPost)
    ) || (
      NaturalResourceTypes.includes(resource) &&
        direction === 'right' &&
        this.cards.includes(byName.EastTradingPost)
    ) || (
      ManufacturedResourceTypes.includes(resource) &&
        this.cards.includes(byName.Marketplace)
    )) {
      return 1
    }

    return 2
  }

  getPurchasableResources () {
    left = this.neighbors.left.getResourceCombinations()
    right = this.neighbors.right.getResourceCombinations()
  }

  canPlayCard (card) {
    if (this.cards.map(c => c.name).includes(card.name)) {
      return false
    }

    // if (typeof card.cost === 'number' && card.cost <= this.coins) {
    if (card.cost.constructor.name === 'Number' && card.cost <= this.coins) {
      return true
    } else if (card.cost.constructor.name === 'Array') {
      const missingResourceCombinations =
            this.getResourceCombinations().map(rc => (
              getMissingResources(rc, card.cost)
            ))
      return missingResourceCombinations
    }
  }

  playCard (card) {
    if (card.cost.constructor.name === 'Number') {
      this.coins -= card.cost
    }

    this.cards.push(card)
  }
}
