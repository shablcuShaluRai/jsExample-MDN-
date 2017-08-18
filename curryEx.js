// In javascript, we have to pass all the argument to get the result

var greet =  function(greeting , name){
  console.log(greeting+" "+name);
}
greet('shalu');
greet('welcome','shalu');


// in curry example
//This function requires both the name and the greeting to be passed as arguments in order to work properly.
// But we could rewrite this function using simple nested currying, so that the basic function only requires a greeting,
//and it returns another function that takes the name of the person we want to greet.

// currying is a way of constructing functions that allows partial application of a function’s arguments. What this means is that you can pass all of the arguments a function is expecting and get the result,
// or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments

var greetCurried = function(greeting){
  return function(name){
      console.log(greeting+" "+name);
  }
}
// var greetHello = greetCurried("hello");
// greetHello('shalu')
// greetHello('bangalore')

greetCurried("hi there")('anyone');


//

function iceCreamOrder(name) {
    return function flavorPicker (flavor) {
        return function scoops (numScoops) {
            return `${name} ordered ${numScoops} scoops of ${flavor} ice cream!`;
        };
    };
}
 const fun = iceCreamOrder('richard')('chocolate')
 console.log(fun(5));


 function houseBuilder(floors){
    return function(color){
        return `building a ${floors}-story,${color} house`
    }
}

const response = houseBuilder(3)('blue');
console.log(response);
