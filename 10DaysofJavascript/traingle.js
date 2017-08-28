// var arrays = [5,6,2,3,4];
//
// function squareIt(arr){
//   var len=arr.length;
//   var result =[];
//   for(var i=0;i<len;i++){
//     var ret = Math.pow(arr[i],2);
//    console.log(ret);
//     result.push(ret);
//   }
//   console.log(result);
//   return result;
//
// }
// squareIt(arrays)


// function traingleOrNot(a,b,c){
//  var maximum = Math.max(a,b,c);
//  console.log(maximum);
//  var a2= Math.pow(a,2);
//  var b2= Math.pow(b,2);
//  var c2=Math.pow(maximum,2);
//  console.log(c2);
//  var check = a2+b2;
//  var res = c2==check ? "yes" : "no"
//  console.log(res);
// }
// var a,b,c;
// a=3;
// b=4;
// c=5;
// traingleOrNot(c,a,b);
// traingleOrNot(7,6,5);

//function traingleOrNot(a,b,c){
  // var max = Math.max(a,b,c);
  // var y =Math.pow(max,2);
  // var min = Math.min(a,b,c);
  // var x = Math.pow(min ,2);
  // var tot =  a+b+c
  // var mid = tot-min-max;
  // var z = Math.pow(mid,2);

  // var res = (y == x+z)? "yes" :"no";
  //
  // console.log(res);
//}

  // traingleOrNot(3,1,2);
  // traingleOrNot(5,3,4);
  // traingleOrNot(3,4,5);
  // traingleOrNot(4,3,5);
  // traingleOrNot(3,5,4);
  // traingleOrNot(4,5,3);
  // traingleOrNot(5,4,3);
  // traingleOrNot(1,2,3);
  // traingleOrNot(7,3,4);

function traingleOrNot(a,b,c){
var max= Math.max(a,b,c);
var h = Math.pow(max,2);
var min =Math.min(a,b,c);
var p =Math.pow(min,2);

var mid = (a!= max && a!=min)&&(b!=max && b!=min)?a:(b!=max && b!=min)&&(c!=max && c!=min)?b:c;
var b = Math.pow(mid,2);
var res = (h==p+b)? 'yes':'no'
console.log(res);

}

// traingleOrNot(3,1,2);
// traingleOrNot(5,3,4);
// traingleOrNot(3,4,5);
// traingleOrNot(4,3,5);
// traingleOrNot(3,5,4);
// traingleOrNot(4,5,3);
// traingleOrNot(5,4,3);
// traingleOrNot(1,2,3);
traingleOrNot(7,3,4);
