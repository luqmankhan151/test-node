// local dependency - use only in particular package
// npm i <packageName>

// global dependency - use it any project
// npm install -g <projectName>

// package.json - manifest file (stores important info about project/package)

// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
