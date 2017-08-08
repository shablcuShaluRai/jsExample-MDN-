
// The keys() method returns a new Array Iterator that contains the keys for each index in the array.

var arr = ['a', 'b', 'c'];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next());


var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
//object keys ignore the holes.
console.log(sparseKeys); // ['0', '2']
// Array keys doesn't ignore holes.
console.log(denseKeys);  // [0, 1, 2]
