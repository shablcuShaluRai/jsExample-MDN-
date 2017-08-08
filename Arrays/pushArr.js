//The push() adds one or more element to the end of an array and returns the new length of array.
var num = [1,2,3];
 num.push(4);
console.log(num); // returns [1,2,3,4]
var n=num.push(5,6,7,8,2)
console.log(num); // returns [1,2,3,4,5,6,7,8]
// n contains the total length of the array
console.log(n); // 9


// merging two array using push method

var fruits = ['apple','mango','orange','banana'];
var vegetables = ["potato","tomato"];
Array.prototype.push.apply(fruits,vegetables);
console.log(fruits); // return [ 'apple', 'mango', 'orange', 'banana', 'potato', 'tomato' ];

console.log(vegetables); // [ 'potato', 'tomato' ]


var num =[1,2,3,4];
Array.prototype.push.apply(num,[5,6,7,8,9]);
console.log(num);
