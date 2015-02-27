window.onload = function () {
var mikeJ = new Player({
  firstName: "Michael",
  lastName: "Jordan"
});
var kobeB = new Player({
  firstName: "Kobe",
  lastName: "Bryant"
});
var playersCollection = new playerCollection();
var playersCollectionView = new PlayerApp.CollectionViews.Player({
  collection: plyersCollection,
  el: $('#playersList');
})

playersCollection.add(mikeJ);
playersCollection.add(kobeB);

// Since we are using a CollectionView to render our models. We don't have to set up the views here. They will be set up
// var mikeView = new playerView({
//   model: mikeJ, 
//   collection: playersCollection
// });
// var kobeView = new playerView({
//   model: kobeB, 
//   collection: playersCollection
// });

};
