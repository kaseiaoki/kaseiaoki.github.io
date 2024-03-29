const vm = require('vm')
const _ = require('lodash/fp')

export function john(json, filter) {
  const filterArray = filterParse(filter)
  let result = json

  for (let f of filterArray) {
    switch (true) {
      case f.match(/\./) !== null:
        if (f === '.' || !result) break
        console.log('priod')
        result = period(result, f)
        break
      case f.match(/sortBy/) !== null:
        console.log('sortBy')
        result = takeBrackets(f) ? _.sortBy(takeBrackets(f), result) : result
        break
      case f.match(/orderByDesc/) !== null:
        console.log('orderByDesc')
        result = takeBrackets(f) ? _.orderBy(takeBrackets(f), 'desc', result) : result
        break
      case f.match(/orderByAsc/) !== null:
        console.log('orderByAsc')
        result = takeBrackets(f) ? _.orderBy(takeBrackets(f), 'asc', result) : result
        break
      case f.match(/unique/) !== null:
        console.log('unique')
        result = takeBrackets(f) ? _.uniqBy(takeBrackets(f), result) : _.uniq(result)
        break
      default:
        console.log('default')
        break
    }
  }

  if (isJSON(result)) return result

  return JSON.stringify(result, null, '\t')
}

const filterParse = function name(filter) {
  return filter.replace(' ', '').split('|')
}

const period = function name(json, filter) {
  const array = filter.split('.')
  let value = json
  if (value == null) return null
  for (let key of array) {
    if (!value[key]) continue
    value = value[key]
  }
  return value
}

const isJSON = function (str) {
  try {
    var obj = JSON.parse(str)
    if (obj && typeof obj === 'object' && obj !== null) {
      return true
    }
  } catch (err) {}
  return false
}

const takeBrackets = function name(params) {
  const contents = params.match(/(?<=\().*?(?=\))/)
  if (contents === null) return false
  return contents[0]
}
