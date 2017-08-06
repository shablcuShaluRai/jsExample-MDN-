
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
