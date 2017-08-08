// The some() method tests whether some element in the array passes the test implemented by the provided function.


function isBiggerThan10(element, index, array) {
  return element > 10;
}

var x = [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
var y = [12, 5, 8, 1, 4].some(isBiggerThan10); // true
console.log(x);
console.log(y);


var fruits = ['apple','mango','banana','orange'];

function checkAvailablity(arr ,value){
  return arr.some(function(arrval){
    return value === arrval;
  })
}
console.log(checkAvailablity(fruits , "mango"));
console.log(checkAvailablity(fruits, "papaya"));


// in ES6 version
var number = [2,4,6,8,10];

function getnumber(arr,val){
  return arr.some(num =>  num === val)
}
var x = true?'yes' : 'no';
console.log(x);
getnumber(number, 6);
