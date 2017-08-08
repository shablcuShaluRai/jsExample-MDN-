// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
// The array is searched backwards, starting at fromIndex.

var numbers = [2,5,9,2,2];
console.log(numbers.lastIndexOf(2)); // returns 4;
console.log(numbers.lastIndexOf(9)); // return 2
console.log(numbers.lastIndexOf(2,1)); // returns first index of searched element.
console.log(numbers.lastIndexOf(2,3)); // returns exact index of searched element;
//if index not matched , and the element available in array , thenit returns the last index of element.
 console.log(numbers.lastIndexOf(2,-1));
 //if only one element available  in an array and index not matched then it returns -1.
console.log(numbers.lastIndexOf(9,1))
