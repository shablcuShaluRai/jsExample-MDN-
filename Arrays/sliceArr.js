//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
// The original array will not be modified.
//The slice() method slices out a piece of an array into a new array.

var fruits = ['apple','orange','banana','mango'];
var ft = fruits.slice();
console.log(fruits.indexOf('orange')); //1
 console.log(ft); //same array returns
 //slices out a part of an array starting from array element 1
 var ft1 =fruits.slice(1);
 console.log(ft1); //[ 'orange', 'banana', 'mango' ]
var ft2 = fruits.slice(0);
console.log(ft2); // [ 'apple', 'orange', 'banana', 'mango' ]
// remove 1 and 2 element from array,slice extracts up to but not including end. 
var ft3 = fruits.slice(1,3);
console.log(ft3); //[ 'orange', 'banana' ]
var ft4 = fruits.slice(2,4);
console.log(ft4); //[ 'banana', 'mango' ]
