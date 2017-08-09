//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

var a = ['a','b','c'];
console.log( typeof a.entries())
 var entry = a.entries();
 for(var i=0; i<a.length;i++){
   console.log(entry.next().value);
 }
