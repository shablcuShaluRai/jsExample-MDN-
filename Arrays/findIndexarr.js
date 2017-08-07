//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
// Otherwise -1 is returned.
var number = function(value){
  return value>25;
}
var num = [12,20,28,60,25].findIndex(number);
console.log(num);// return index 2;
