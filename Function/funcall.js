
// if functions are objects , objects can have methods, then functions can have methods.


function add(a , b){
  return a+b;
}
console.log(add(5,4));
//The call() method calls a function with a given this value and arguments provided individually.
//It can be used to invoke (call) a function with an owner object as the first argument (parameter).
console.log(add.call(this,1,4));



//second example of call method

 var person = {
   name: 'shalu',
   age: 20,
   fullDetail: function(){
     return this.name + " " + this.age
   }
 }

 var person1 = {
   name:'Sahil',
   age : 18
 }
  //var detail = person.fullDetail();
 var detail = person.fullDetail.call(person1);

 console.log(detail);


// Another example of call()


var compose = {
 understand: "try to understand",
  describe: function(){
    //function isn't attached to an object, then it will inherit its this from the global object.
    // If the function is attached to an object, its default this is the receiver of the method call.
    console.log(this.understand);
  }
}

var callCompose = {
  understand : "call from callCompose"
}

//But call gives us a way to "borrow" a method from one object to use for another.
compose.describe.call(callCompose);
