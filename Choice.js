export default class Choice {
  constructor (options) {
    this.options = options
  }
}

export const getCombinations = list => list.reduce((acc, curr) => {
  if (curr.constructor.name === 'String') {
    return acc.map(c => [...c, curr])
  } else if (curr.constructor.name === 'Choice') {
    return [].concat(...curr.options.map(o => acc.map(c => [...c, o])))
  }
}, [[]])
