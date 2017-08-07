//concat method is used to merge two or more arrays, and it returns the new array.

var fruits = ["apple","banana","orange","peers"];
var fruits1 = ["litchi","blackberry","jackfruit"];
var fruitss = fruits.concat(fruits1);
console.log(fruitss);


// concatenating two arrays

var alpha = ['a','b','c','d'];
var num = [1,2,3,4]
var alphanum = alpha.concat(num);
var numalpha = num.concat(alpha);
console.log(alphanum); // output - ['a','b','c','d',1,2,3,4]
console.log(numalpha); //output - [1,2,3,4,'a','b','c','d']


// concatenating three arrays

var num1 = [1,2,3,4];
var num2 = [5,6,7,8];
var num3 = [9,10,11,12];
var number = num1.concat(num2 , num3);
console.log(number);

// concatenating values to an arrays

var alpha = ["a", "b"];
var alphanumeeric = alpha.concat(1,[2,3]);
console.log(alphanumeeric);


// concatenating nested arrays

var num1 = [[1]];
var num2 = [2,[3]];
num1.push(4);
var num =num1.concat(num2);
console.log(num);
