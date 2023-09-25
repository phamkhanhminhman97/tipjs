const mySet = new Set();
console.log(typeof mySet);

mySet.add(1)
mySet.add(1)
let a = mySet.has(1)
console.log(a);
console.log(mySet);
let b = [...mySet]
console.log(b);