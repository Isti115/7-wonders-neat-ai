import { getCombinations, getMissingResources } from './utilities.js'

export default class Player {
  constructor ({
    wonder,
  } = {}) {
    this.coins = 3
    this.cards = []
    this.wonder = wonder
  }

  getResourceCombinations () {
    const allResources = [].concat(...this.cards.map(c => c.products))
    return getCombinations(allResources).map(c => c.sort())
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
