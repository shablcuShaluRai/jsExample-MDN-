// //The indexOf() method returns the first index at which a given element can be found in the array,
// // or -1 if it is not present.
//
// var arr = [2,5,5,7,10];
// console.log(arr.indexOf(7)); // return 3,index of element
// console.log(arr.indexOf(5,2)); // returns 2 , when element found in an array.
// console.log(arr.indexOf(9)); // return -1 , when element not found in an array
// console.log(arr.indexOf(10)); //return 4 ,index of element in an array.
//
// // if matched element found then it print yes otherwise no
// var arr = [2,5,7,9,3];
// var k=5;
// var print = arr.indexOf(k)? "yes":"no";
// console.log(print);


//finding all the occurences of an element
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);

while(idx!=-1){
var pushind = indices.push(idx);
//  console.log(pushind);
  idx = array.indexOf(element,idx+1);
//  console.log(idx); 
}
console.log(indices);
