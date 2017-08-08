//The sort() method sorts the elements of an array in place and returns the array.
//The sort is not necessarily stable. The default sort order is according to string Unicode code points.



// The sort()  sort an array alphabetically.

var fruits = ['apple', 'banana','orange','mango'];
console.log(fruits.sort());
console.log(fruits.reverse()); // array modified.

var things = ['word', 'Word', '1 Word', '2 Words'];
console.log(things.sort());

// it doesnot sort the number
var scores = [1, 10, 21, 2];
console.log(scores.sort()); // because '10' comes before '2' in Unicode code point order.


// sorting the number
var numbers = [2,5,1,4,6,7]

var x = numbers.sort(function(a,b){
  return a-b;
})
console.log(x);
