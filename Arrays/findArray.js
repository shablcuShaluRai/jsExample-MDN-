//The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
var isBigEnough = function(value){
  return value>15;
}
var arr = [15,10,20,35,40];
var result = arr.find(isBigEnough);
console.log(result);// output 20 when get the first element which satisfies the condition.


// 2. find an object in an array by one of its properties.

var inventory = [
  {name:'apple', quantity:4},
  {name:'banana', quantity:5},
  {name:'peers', quantity:6}
];

var findapple = function(fruit){
  return fruit.name === "apple";
}
console.log(inventory.find(findapple));
