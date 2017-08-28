

function toObject(arr) {
 var rv = {};
 for (var i = 0; i < arr.length; ++i)
   if (arr[i] !== undefined) rv[i] = arr[i];
 return rv;
}
console.log(toObject([1,2,3,4,5]));
