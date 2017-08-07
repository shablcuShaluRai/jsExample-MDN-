
// The Array.isArray() function determines whether the passed value is an Array

var x = Array.isArray([1,2,3,4]);
console.log(x); // returns true

console.log(Array.isArray()); // returns false

console.log(Array.isArray({})); //returns false

console.log(Array.isArray("foo")); //return false

console.log(Array.isArray([])); // return true

console.log(Array.isArray(new Array)); //returns true
