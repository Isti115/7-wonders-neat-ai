export default class Card {
  constructor ({
    age,
    coin = 0,
    cost = 0,
    name,
    playerCount,
    point = 0,
    products = [],
    science = null,
    shield = 0,
    trade = null,
    type,
  } = {}) {
    this.age = age
    this.coin = coin
    this.cost = cost
    this.name = name
    this.playerCount = playerCount
    this.point = point
    this.products = products
    this.science = science
    this.shield = shield
    this.trade = trade
    this.type = type
  }
}
