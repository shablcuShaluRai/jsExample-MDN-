//The shift() method removes the first element from an array and returns that element.
// This method changes the length of the array.

var a = [1,2,3];
// The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down,
// then returns the removed value. If the length property is 0, undefined is returned.
console.log(a.shift()); // returns 1
console.log(a); // returns [2,3]

// when an empty array then it returns undefined
var b =[];
console.log(b.shift());


// remove an element of an array
var fruits = ['mango','apple','orange','banana'];
console.log(fruits.shift());
console.log(fruits);
