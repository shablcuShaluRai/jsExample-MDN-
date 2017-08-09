//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

var a = ['a','b','c'];
console.log( typeof a.entries()) // object
 var entry = a.entries();
 for(var i=0; i<a.length;i++){
   // returns the value and index of an array
   console.log(entry.next().value); //[ 0, 'a' ] [ 1, 'b' ] [ 2, 'c' ]

 }


// using for...of loop

var fruits = ['apple','mango','orange'];
var fruit = fruits.entries();
for(var ft of fruit){
  console.log(ft);
}
