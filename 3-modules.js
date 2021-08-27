//  Modules -- Encapsulated Code
//  NodeJS  -- uses Common JS where every file is a module

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alt-flavour')

require('./7-mind-grenade')

console.log(data)
console.log(names)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
