export const f2 = (arr) => arr.sort((a, b) => a - b).slice(0, 2).reduce((acc, item) => acc += item, 0)
