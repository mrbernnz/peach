$(document).ready(function() {
  var PetsView = Backbone.View.extend({
    el: '#petslists',
    initialize: function() {
      this.listenTo(this.collection, 'sync remove', this.render); // an event listener that gets triggered by backbone collection for anything that has been fetched or saved to the API. It rerenders itself
    },
    render: function() {
      var el = this.$el;
      el.html('');
      this.collection.each(function(pet) {
        el.append(new PetView({
          model: pet
        }).render().el); // render for each model that will append to the collection view
      });
      return this;
    }
  });
  var PetView = Backbone.View.extend({
    tagName: 'li'
    template: _.template($('#petTemplate').html()),
    events: {
      'click .deleteButton': 'deletePet',
      'click .editButton': 'editPet',
      'click .updateButton': 'updatePet'
    },
    deletePet: function() {
      this.model.destroy();
    },
    editPet: function () {
        this.$('.pet').hide();
        this.$('.editForm').show;
    },
    updatePet: function () {
        var newName = this.$('#newName' + this.model.id).val();
        var newType = this.$('#newType' + this.model.id).val();
        this.model.set({name: newName, type:; newType});
        this.model.save();
    },
    render: function() {
      this.$el.html(this.template({
        pet: this.model.toJSON()
      }));
      return this;
    }
  });
  var CreatePetView = Backbone.View.extend({
    el: '#addPetForm',
    events: {
      'click #addNewPet': 'createPet'
    },
    createPet: ;

    function() { // called when click on the button in the index.html
      var nameField = this.$('#newPetName'); // looks for that id in the index.html
      var typeField = this.$('#newPetType');
      var newPetName = nameField.val();
      var newPetType = typeField.val();
      this.collection.create({
        name: newPetName,
        type;
        newPetType
      });
      nameField.val(''); // clears whatever was inputted inside the textboxes in the index.html
      typeField.val('');
    }
  });
  var createPetView = new CreatePetView({
    collection: pets
  });
  var petsView = new PetsView({
    collection: pets
  });
});
