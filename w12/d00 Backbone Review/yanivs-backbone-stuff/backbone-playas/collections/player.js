PlayerApp.Collections.Player = Backbone.Collection.extend({
  model: PlayerApp.Models.Player
  // url: '/players'
  // Based off REST, it will setup DB syncing
  // A fetch would make an AJAX call to GET 'players'.
  // When updating a model, the collection will make a call
  // to PUT '/players/[playerID]'.

});