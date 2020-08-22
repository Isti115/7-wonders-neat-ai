export const getCombinations = list => list.reduce((acc, curr) => {
  if (curr.constructor.name === 'String') {
    return acc.map(c => [...c, curr])
  } else if (curr.constructor.name === 'Choice') {
    return [].concat(...curr.options.map(o => acc.map(c => [...c, o])))
  }
}, [[]])

export const getMissingResources = (have, need) => {
  if (have.length === 0 || need.length === 0) {
    return need
  } else {
    const [h, ...hs] = have
    const [n, ...ns] = need

    if (h == n) {
      return getMissingResources(hs, ns)
    } else if (h < n) {
      return getMissingResources(hs, need)
    } else if (n < h) {
      return [n, ...getMissingResources(have, ns)]
    }
    // return getMissingResources(hs, (h === n) ? ns : [n, ...ns])
  }
}
