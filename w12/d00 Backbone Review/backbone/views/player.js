var ['playerView'] = Backbone.View.extend({
  tagName: 'li',
  className: 'player',
  collection: 
  // el: $(''),
  // We can supply an explicit el.
  // Meaning, we can find an existing element on the page.
  // We cna also give an explicit 'tmplate'
  // el: '<li class="player"></li>'
  initialize: function () {
    // render
    // puts the element on the page
    // listenTo
    // Listens to any changes to the collection
    // this.render();
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function () {
    // Lets make sure that when we rendere our data we clean out the old conntents of our element.
    // this.$el.empty();
    // We're using .html();, which replaces the current HTML. If we were using .append(), we would need .empty() first. Otherwise we would have old data hanging around
    this.$el.html(this.model.fullname());
    $('#playersList').append(this.$el);
  }
});
