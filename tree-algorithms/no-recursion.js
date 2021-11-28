// implement without reqursion
let tree = require("./tree-cycles")

// tests
console.log(find(tree, 1)) // true
console.log(find(tree, 3)) // true
console.log(find(tree, 11)) // true
console.log(find(tree, 17)) // false
console.log(find(tree, 14)) // true
