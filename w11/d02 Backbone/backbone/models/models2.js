var Pet = Backbone.Model.extend({
  defaults: {
    name: 'Not Specified',
    type: 'Not Specified'
  },
  initialize: function(){
    console.log("Your pet has been created");
    // a heads up on any change of state
    this.on('change:name', function(){
      console.log("That's better than Ochocinco.");
    });
    this.on('change', function(){
      console.log('SOMETHING IS AFOOT');
    });
    this.on("invalid", function(model, error){
      console.log(error);
    });
  },
  validate: function(attributes){
    if(attributes.name === undefined){
      return "If I am nameless can I truly exist?";
    } if(attributes.type === undefined){
      return "What is the nature of being if one does not have a type?";
    }
  },
});
