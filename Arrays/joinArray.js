// join() joins all elements of the array into string.

var weather = ['summer','winter','rain','air'];
console.log(weather.join()); // summer,winter,rain,air(default seperator comma)
console.log(weather.join('-'));// we get the result using separator.//summer-winter-rain-air
console.log(weather.join(" ")); //summer winter rain air



const schools = [
"Yorktown",
"Washington & Lee",
"Wakefield"
]

const cutschool = (cut , list ) =>
// here we get new array, which contains that value which is not equal to the value of cut variable.
// (i.e  )
 list.filter(school => school!== cut)
 console.log(cutschool);
// cutschool is function which takes two parameter, here we pass two arguments , args of cut is "Washington & Lee" and list
// contains array of schools.
console.log(cutschool("Washington & Lee" , schools).join(" * "));
console.log(schools.join('\n'));
