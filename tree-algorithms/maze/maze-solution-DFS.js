// start point is always 0,0
// end point is n-1, n-1
// can't walk in diagonal
// maze is a boolean matrix - true means you can walk there

function hasSolution(maze) {
}

let m2 = [
    [1,0,1,1,1],
    [1,0,1,0,1],
    [1,1,1,0,1],
    [1,0,0,0,1],
    [1,0,0,1,1],
]
console.log(hasSolution(m2))
