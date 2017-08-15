
const iceCreamStats = [
  {
    name: 'Amanda',
    gallonsEaten: 3.8
  },
  {
    name: 'Geoff',
    gallonsEaten: 5.2
  },
  {
    name: 'Tyler',
    gallonsEaten: 1.9
  },
  {
    name: 'Richard',
    gallonsEaten: 7923
  }
];

var result = iceCreamStats.reduce((acccumulator,currentvalue) => {return acccumulator+currentvalue.gallonsEaten;},0);

console.log(result);



// Another Example of  reduce
//
// const musicData = [
//     { artist: 'Adele', name: '25', sales: 1731000 },
//     { artist: 'Drake', name: 'Views', sales: 1608000 },
//     { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
//     { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
//     { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
//     { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
//     { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
//     { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
//     { artist: 'Rihanna', name: 'Anti', sales: 603000 },
//     { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
// ];
//
//
// var totalAlbumSales = musicData.reduce((acc , cv) => {
//   return
// console.log(acc);
// console.log(cv.sales);
//    acc + cv.sales;},0);
//
//
// console.log(totalAlbumSales);



const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

  // var album = musicData.filter((fd ) => {
  // //  console.log(fd);
  //   var str = fd.artist + fd.name;
  //
  //   return 25 > str.length ;
  //
  //
  // });
  //
  // //console.log(album);
  //
  // var totalAlbumSales = album.reduce((acc , cv) => {
  //   return acc + cv.sales;
  //
  // },0);
  //

  var totalAlbumSales = musicData.filter((fd ) => {var str = fd.artist + fd.name;
  return 25 > str.length ;}).reduce((acc , cv) => { return acc + cv.sales; },0);

  console.log(totalAlbumSales);


  const data = [
     { name: 'Tyler', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
     { name: 'Richard', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
     { name: 'Amanda', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
     { name: 'Andrew', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
     { name: 'David', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
     { name: 'Karl', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
 ];


//  iceCreamTotals = data.reduce((result, item) => {
//      item.favoriteIceCreams.map(favor => {
//          if (result[favor]) {
//              result[favor]++;
//          } else {
//              result[favor] = 1;
//          }
//      });
//      return result;
//   }, {});
//
// console.log(iceCreamTotals);


var iceCreamTotals = data.reduce(
  ((acc,curr)=>acc.concat(curr.favoriteIceCreams)),[]).
  reduce((acc,curr)=> {acc[curr] ? (acc[curr] = acc[curr] + 1) :
    (acc[curr] = 1); return acc;},{});

    console.log(iceCreamTotals);
