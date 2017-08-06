
// The apply() method calls a function with a given this value, and arguments provided as an array .
// e.g functionName.apply(this,[args1,args2]);
function add(a,b){
  return a+b;
}
var funapply = add.apply(this,[1,2]);
console.log(funapply);



//Another Example of Apply()

var person = {
  firstName : "shalu",
  lastName : "Rai",
  fullName : function(){
    return this.firstName + " " + this.lastName;
  }
}

var anotherPerson = {
  firstName : "sahil",
  lastName : "Rai"
}

console.log(person.fullName.apply(anotherPerson));

//JavaScript arrays do not have a max() method, we can apply the Math.max() instead
var max=Math.max.apply(null,[1,2,3,4,5,6]);
console.log(max);
