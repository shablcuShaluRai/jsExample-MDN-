// The copyWithin() method shallow copies part of an array to another location in the same array and returns it,
// without modifying its size.

var arrs = ['apple','banana','papaya','orange']
arrs.copyWithin(1,3);
console.log(arrs);

var arrs = ['apple','banana','papaya','orange']
arrs.copyWithin(1,2);
console.log(arrs);


var ars = ['alpha', 'bravo', 'charlie', 'delta'].copyWithin(2, 0);
console.log(ars);
