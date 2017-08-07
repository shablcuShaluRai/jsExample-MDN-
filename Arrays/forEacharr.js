//forEach()  executed a provided function once for each array element.
var fruits = ['apple','orange','banana'];
// fruits.forEach(function(element){
//   console.log(element);
// })
function felement(element){
  console.log(element);
}
fruits.forEach(felement);

// In ES6 version
fruits.forEach(element => console.log(element));

//here is program to copy all the element of item into stationary
var item = ['pen','copy','pencil'];
var stationary = [];
for(var i=0; i<item.length; i++){
  stationary.push(item[i]);
}
console.log(stationary);

// above program can be written using for each loop
var items = ['pen','copy','pencil'];
var stationary = [];
// items.forEach(function(item){
//   stationary.push(item);
// })
items.forEach(item => stationary.push(item))
console.log(stationary);

//3. printing the content of array

 function arrayelement(element,index){
   console.log("a["+index+"]-",element);
    }
[12,15,,25,30].forEach(arrayelement); // skip the index,it doesn't create a new array.
