// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var fruits = ['apple','mango','banana','orange','litchi','peers','pomegranate'];
// ES6 version or using arrow function
 var fruitslong = fruits.filter(ft => ft.length > 5);
 console.log(fruitslong);


 // Another way

  var words = ['hello','hey','hurray','try','again'];
  // using the function
  var longwords = words.filter(function(wd){
    return wd.length>3;
  })
// here is iteration like this.
// callback1-
//   longwords = function(hello){  5>3;  return true to keep the element.}
//   then get first element in longwords = ['hello']
// callback2-
//   longwords = function(hey){3>3; return false then discard the element.}
// callback3-
//    longwords = function(hurray){6>3: return true to keep the element.}
//    longwords =['hello','hurray']
// callback4-
//    longwords = function(try){3>3; return false, discard}
// callback5-
//    longwords = function(again){5>3; return true, keep the element}
//    lomgwords = ['hello','hurray','again']

  console.log(longwords);

// filtering out small values

function isnumber(value){
  return value>8;
}
var num = [12,10,8,7,202,108];
var number = num.filter(isnumber);
console.log(number);
