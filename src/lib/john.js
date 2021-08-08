const vm = require('vm')
const _ = require('lodash/fp')

export function john(json, filter) {
  const filterArray = filterParse(filter)
  let result = json
  for (let f of filterArray) {
    console.log(f.match(/./) !== null)
    switch (true) {
      case f.match(/./) !== null:
        console.log('priod')
        result = period(json, f)
        break
      default:
        console.log('default')
        result = result
    }
  }
  return result
}

const filterParse = function name(filter) {
  filter = filter.replace(' ', '')
  return filter.split('|')
}

const period = function name(json, filter) {
  const array = filter.split('.')
  let value = json
  for (let key of array) {
    console.log(json[0], key)
    value = json[key]
  }
  return value
}
