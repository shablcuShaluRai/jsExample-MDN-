//The includes() method determines whether an array includes a certain element, returning true or false as appropriate.

var a = [1,2,3,4,5];
var k=5;
console.log(a.includes(2));
console.log(a.includes(9));
// if the number match , then print yes, otherwise no
var x = a.includes(k)? "yes" : "no";
 console.log(x);

 var x=[1,2,,3,4].includes(4,4) // here includes contain (searchelelement,fromindex)
// it returns true because the element 4 is on 4th index.
console.log(x);

var x = [1,2,3,4].includes(3,3);
console.log(x);// it returns false because the element doesn't found at given index.


//if fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching
// for searchElement. If the computed index is less than 0, the entire array will be searched.


var arr = ['a', 'b', 'c'];
console.log(arr.includes('a', -100)); // true
console.log(arr.includes('b', -100)); // true
console.log(arr.includes('c', -100)); // true
