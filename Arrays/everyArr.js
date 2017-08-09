
// the every() methods test whether all element in the array pass the test implemented  by the provided function.

// in Es6 or using arrow function
 var arr = [12,15,8,34,45].every(x => x>10); // it return false, because all the elements are not greater than 10.
 console.log(arr);
 var arr = [12,15,35,27,78].every(x => x>=12);
 console.log(arr);

 function isAllNumber(element , index){
  // console.log(element);
   return element>=12;
 }
 var arr  = [12,25,45,67,78,80].every(isAllNumber);
 console.log(arr);
