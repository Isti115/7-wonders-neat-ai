export default class Card {
  constructor ({
    age,
    coins = 0,
    color,
    cost = 0,
    name,
    points = 0,
    products = [],
    science = null,
    shields = 0,
    trade = null,
  } = {}) {
    this.age = age,
    this.coins = coins,
    this.color = color,
    this.cost = cost,
    this.name = name,
    this.points = points,
    this.products = products,
    this.science = science,
    this.shields = shields,
    this.trade = trade,
  }
}
