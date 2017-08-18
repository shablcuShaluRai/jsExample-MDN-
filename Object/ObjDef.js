

//  An object is a collection of properties, and a property is an association between a name (or key) and a value.
// A property can be a function , in which case the property is known as method.

//An object can be created by using object literal

 var person = {
   firstName:"Shalu",
   Lastname: "Rai",
   age:25,

 }

console.log(person.firstName + " "+ person.age);

// Since functions are variables, we can add them to objects.

const obj = {
  message:" they can be added to object like variable",
   log(message){
     console.log(message);
   }
}
obj.log(obj.message);
