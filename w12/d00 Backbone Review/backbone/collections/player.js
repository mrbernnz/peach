var playerCollection = Backbone.Collection.extend({
  model: Player,
  url: '/players'
  // Bassed off REST, it will setup DB syncing
  // A fetch would make an AJAX call to GET 'players'.
  // When updating a model, the collection will make a call to PUT '/player/[playerID]'.
});
