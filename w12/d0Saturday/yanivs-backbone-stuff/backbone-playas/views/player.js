PlayerApp.Views.Player = Backbone.View.extend({
  tagName: 'li',
  className: 'player',
  // We can supply an explicit el
  // meaning, we can find an existing element on the page
  // We can also give an explicit 'template'
  // el: '<li class="player"></li>'
  initialize: function(){
    // render
    // setting up the element
    this.render();
  },
  render: function(){
    // Lets make sure that when we render our data,
    // we clean out the old contents of our element
    // this.$el.empty();
    // We're using .html(), which replaces the current HTML
    // If we were using .append(), we would need .empty()
    // first. Otherwise we would have old data hanging around
    this.$el.html(this.model.fullname());
  }
})