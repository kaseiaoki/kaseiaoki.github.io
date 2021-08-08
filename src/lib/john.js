const vm = require('vm')
const _ = require('lodash/fp')

export function john(json, filter) {
  const filterArray = filterParse(filter)
  let result = json
  for (let f of filterArray) {
    switch (true) {
      case f.match(/./) !== null:
        if (f === '.' || !result) break
        console.log('priod')
        result = period(result, f)
        break
      default:
        console.log('default')
        break
    }
  }
  try {
    JSON.stringify(result)
  } catch (e) {
    return result
  }
  return JSON.stringify(result, null, '\t')
}

const filterParse = function name(filter) {
  filter = filter.replace(' ', '')
  return filter.split('|')
}

const period = function name(json, filter) {
  const array = filter.split('.')
  let value = json
  console.log(value, json, filter)
  if (value == null) return null
  for (let key of array) {
    if (!value[key]) continue
    value = value[key]
  }
  return value
}
