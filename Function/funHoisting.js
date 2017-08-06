
// function hoisting: can be called before declaration
 console.log(add(5,3));
 function add(a,b){
   return a+b;
 }

// Type Error- mul is not a function because  funnction expression in javascript not hoisted.
// console.log(mul(5,3));
// var mul =  function(a,b){
//   return a*b;
// }

// var factorial = function(x){
//   if(x<=1){
//     return 1;
//   }
//   else{
//     return x * factorial(x-1);
//   }
// }
//   console.log(factorial(10));
