//choose two cards
//var chstw = process.argv[2];

//An array of card number
var crd = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
//An array of card suit
var suit = ['Spade', 'Diamond', 'Heart', 'Club'];
//Empty array to insert card number and suit
var crdst = [];
var twcrds = []

//Loop through crd array and suit array lengths for all values
for (var i = 0; i < crd.length; i++) {
  for (var j = 0; j < suit.length; j++) {
    //Add combination of both arrays into crdst array
    crdst.push(crd[i] + suit[j]);
    //Loop through the newly created crdst array
    // for (var k = 0; k < crdst.length; k++) {
    //   //Add two different values from crdst array to twcrds array
    //   twcrds.push(crdst[k]+ " " +crdst[k+1]);
    //
    //   twcrds = crdst[Math.floor(crd.length * Math.random())] + crdst[Math.floor(suit.length * Math.random()) + 1];
    //
    // }
  }
}
//Print two cards
//console.log(twcrds[k]);
