
var log = function(message) {
  console.log(message);
}
log('javascript is functional program');

// using arrow function

var log = message1 =>console.log(message1);
log('javascript learner');

// Functions can be sent to other functions as arguments just like other variables.
const insideFun = logger => logger("they can be sent to other function");
insideFun(message  => console.log(message));

//
var createScream = function(logger){
  return function(message){
    logger(message.toUpperCase()+'!!')
  }
}
// here createScream contains function which prints the message .
const scream = createScream(message => console.log(message));
//call function scream
scream('function can be return from another function');
scream('createScream returns a function');
scream(' scream invokes the return function');

// using Arrow function
const createScreams = logger => message =>
logger(message.toUpperCase() + "!!!")
 const curry = createScreams(mess => console.log(mess));
curry ('its also type of currying')
