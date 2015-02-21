PlayerApp.Models.Player = Backbone.Model.extend({
  // Attributes of a model are saved in the 'attributes' property.
  // If we try to access them using 'this.firstName', it won't find it.
  // We either have to access the 'attributes' property, or, better yet, use the model's 'get' function
  fullname: function(){
    return this.get('firstName') + ' ' + this.get('lastName')
  }
})