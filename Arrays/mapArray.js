// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

var numbers = [2,4,5,7];
var getsquare = numbers.map(function(n){
  return n*n;
})
console.log(getsquare); // it returns all the element in a new arrray. //op-[ 4, 16, 25, 49 ]
console.log(numbers); // numbers are still same //op-[2,4,5,7]
 numbers.map(function(x){
  console.log(x*2); // it returns the element.//op- 4 8 10 14
})
console.log(numbers);
//in ES6
var doubles = numbers.map(n => n*2)
console.log(doubles); // it also returns element in an array.

var number = [1,4,9];
var roots = number.map(Math.sqrt);
console.log(roots);

// using map to reformat object in an array.

// create an array which contains the object .
var obarr = [
  {key:1, value:10},
  {key:2, value:20},
  {key:3, value:30}
]
// map() creates a new array which is called newArray, which contains the object.
var newArray = obarr.map(function(obj){
  var robj = {} // create an empty object.
  robj[obj.key] = obj.value; // in robj contains the key and value
  return robj;
})
console.log(newArray); // returns [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
