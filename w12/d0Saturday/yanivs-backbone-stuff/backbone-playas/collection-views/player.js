PlayerApp.CollectionViews.Player = Backbone.View.extend({
  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'add', this.render)
  },
  render: function(){
    this.$el.empty();
    this.collection.models.forEach(function(model){
      var modelView = new PlayerApp.Views.Player({model: model});
      this.$el.append(modelView.$el);
    }.bind(this))
  }
})