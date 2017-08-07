
//The Array.of() method creates a new Array instance with a variable number of arguments,regardless of number or type of the arguments.
console.log(Array.of(7)); //output- [ 7 ]

console.log(Array.of(1,2,3,4)); //output- [1,2,3,4]

console.log(Array(7)); //output- [ , , , , , , ]

console.log(Array.of(undefined));

console.log(Array(undefined)); // [ undefined ]
