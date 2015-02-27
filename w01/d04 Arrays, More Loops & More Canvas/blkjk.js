//An array of card numbers
var crd = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
//An array of card suits
var suit = ['Spade', 'Diamond', 'Heart', 'Club'];
//Empty array
var crdst = [];
//Loop through crd array and suit array lengths for all values
for (var i = 0; i < crd.length; i++) {
  for (var j = 0; j < suit.length; j++) {
    //Add combination of both arrays' values into crdst array
    crdst.push(crd[i] + suit[j]);
  }
}
//Print deck of cards.
console.log(crdst);
