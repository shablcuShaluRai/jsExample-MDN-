
// Declarative programming is a style of programming where applications are structured in a way that prioritizes
//describing what should happen over defining how it should happen.

var string = 'This is the learning programming show with shalu rai';
var urlFriendly = '';

for(var i=0; i<string.length; i++){
  urlFriendly = string[i]===" "?urlFriendly += '-' : urlFriendly += string[i];
}
console.log(urlFriendly);


// imperative

const strings = "This is the mid day show with Cheryl Waters"
const urlFriendlys = strings.replace(/ /g, "-")
console.log(urlFriendlys)
