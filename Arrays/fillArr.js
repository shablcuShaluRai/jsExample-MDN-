
// the fill()  fills all the elements of an array from start index to end with a static value.

var arr = [1,4,5,8];
console.log(arr.fill(2)); // [2,2,2,2]
// The fill method is a mutable method, it will change this object itself, and return it, not just return a copy of it.
console.log(arr.fill(3,1,2)); // [2,3,2,2]
console.log(Array(3).fill(4));
