window.onload = function(){
  var mikeJ = new PlayerApp.Models.Player({
    firstName: "Michael", 
    lastName: "Jordan"
  });

  var kobe = new PlayerApp.Models.Player({
    firstName: 'Kobe',
    lastName: 'Bryant'
  });

  playersCollection = new PlayerApp.Collections.Player();
  playersCollectionView = new PlayerApp.CollectionViews.Player({
    collection: playersCollection,
    el: $('#players-list')
  })

  playersCollection.add(mikeJ);
  playersCollection.add(kobe);

  // Since we are using a CollectionView
  // To render our models,
  // We dont have to set up the views here;
  // They will be set up when the CollectionView renders

  // var mikeView = new PlayerApp.Views.Player({
  //   model: mikeJ})
  // var kobeView = new PlayerApp.Views.Player({
  //   model: kobe})

}