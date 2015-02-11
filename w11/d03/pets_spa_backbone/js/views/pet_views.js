$(document).ready(function() {
  var PetsView = Backbone.View.extend({
    el: '#petsList',
    initialize: function() {
      this.listenTo(this.collection, 'sync remove', this.render);
    },

    render: function() {
      var el = this.$el;
      el.html('');
      this.collection.each(function(pet) {
        el.append(new PetView({model: pet}).render().el);
      });
      return this;
    }
  });

  var PetView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($("#petTemplate").html()),
    events: {
              'click .deleteButton': 'deletePet',
              'click .editButton': 'editPet',
              'click .updateButton': 'updatePet'
            },
    editPet: function() {
      this.$('.pet').hide();
      this.$('.editForm').show();
    },

    updatePet: function() {
      var newName = this.$('#newName' + this.model.id).val();
      var newType = this.$('#newType' + this.model.id).val();
      this.model.set({name: newName, type: newType});
      this.model.save();
    },
    
    deletePet: function() {
      this.model.destroy();
    },

    render: function() {
      this.$el.html(this.template({pet: this.model.toJSON()}));
      return this;
    }
  });

  var CreatePetView = Backbone.View.extend({
    el: "#addPetForm",
    events: {'click #addNewPet': 'createPet' },
    createPet: function() {
      var nameField = this.$('#newPetName');
      var typeField = this.$('#newPetType');
      var newPetName = nameField.val();
      var newPetType = typeField.val();

      this.collection.create({name: newPetName, type: newPetType});

      nameField.val('');
      typeField.val('');
    }
  });

  var createPetView = new CreatePetView({collection: pets});
  var petsView = new PetsView({collection: pets});
});
