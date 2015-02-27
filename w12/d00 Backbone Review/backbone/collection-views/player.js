playerapp.collectionviews.player = Backbone.View.extend({
  render: function () {
    this.$el.empty();
    this.collection.models.forEach(function (model) {
      var modelView = new PlayersApp.Views.Player({model: model});
    });
  }
});
