

var Player = Backbone.Model.extend({
  // Attributes of a model are saved in the 'attributes' property.
  // If we try to access them using 'this.firstName', it won't find it.
  // We either have to access the 'attributes' property, or 
  fullname: function () {
    return this.get.('firstName') + ' ' + this.get.('lastName');
  }
});
