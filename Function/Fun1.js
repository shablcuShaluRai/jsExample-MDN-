
// a function is a block of code designed to perform a task.
// it takes a number of arguments.
// A function executes when something executes.
var multiplication = function(a,b){
  return a*b;
}

console.log(multiplication(4,5));



// second method for multiplication


var multiplication = function(a,b){
   console.log(a*b);
}

multiplication(6,5);


// function can be defined as javascript built in function constructor.
// it can also called function object
//var subtract= new Function("a","b","return a-b")
//console.log(subtract(7,5));
