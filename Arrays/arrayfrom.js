// The Array.from() method creates a new Array instance from an array-like or iterable object.
//An array-like or iterable object to convert to an array.
var bar = ["a","b","c"];
var from=Array.from(bar);
console.log(from);
// Array from String
console.log(Array.from('foo'));

//which allows you to execute a map function on each element of the array.
var m = new Map([[1, 2], [2, 4], [4, 8]]);
var mp = Array.from(m);
console.log(mp);

// Another Example of map in array
 var arr =[
   {key:'foo',value:'bar'},
   {key:'hello',value:'world'}
 ]

 var result = new Map(arr.map((i) => [i.key , i.value]));
 console.log(result);

// Array from an array like object.An array-like or iterable object to convert to an array.
 function f(){
   return Array.from(arguments);
 }
 var fx = f(1,2,3,4,5);
console.log(fx);//output:[1,2,3,4,5]

// Array from using arrow function
var arr = [1,2,3,4,5];
var arrow = Array.from(arr, x => x + x);
console.log(arrow);
