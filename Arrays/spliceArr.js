// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

var fruits = ['apple','banana','mango','orange'];
// (index , deleteitem , add item)
fruits.splice(2, 0, 'papaya') //(inset element at 2 position , no element remove , new item add)
console.log(fruits);
// add new item at 2 position and remove 2 element from this position.
fruits.splice(2,2,"cherry");
console.log(fruits);
