let list = [
{ title: "Rad Red"},
{ title: "Lawn"},
{ title: "Party Pink"}
]
//We could create a function that will add colors to that array using array.push().
var addColor = function(colors, listarr) {
  //console.log(colors);//glam green
//  console.log(listarr); //[ { title: "Rad Red"}, { title: "Lawn"},   { title: "Party Pink"}   ]
listarr.push({ title: colors })
//console.log(listarr);
return listarr;
}

console.log(addColor("Glam Green", list).length)
console.log(list);
