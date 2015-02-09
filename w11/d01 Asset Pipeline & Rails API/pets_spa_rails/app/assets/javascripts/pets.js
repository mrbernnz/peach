document.addEventListener('DOMContentLoaded', function() {
  var addAllPets = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/pets.json');
    xhr.addEventListener('load', function() {
      var pets = JSON.parse(xhr.responseText);
      pets.forEach(function(pet) {
        addPet(pet); //go to line 30
      })
    });

    xhr.send();
  }

  addAllPets(); //go to line 1

  var deletePet = function() {
    var li = this.parentNode;
    var id = li.id.substring(3);
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://localhost:3000/pets/' + id);
    xhr.addEventListener('load', function() {
      if(JSON.parse(xhr.status === 200)) {
        li.remove();
      }
    });

    xhr.send();
  };

  var addPet = function(pet) {
    var li = document.createElement('li');
    setLiToPet(li, pet); // go to line 37
    var ul = document.getElementById('petsList')
    ul.appendChild(li);
  }

  var setLiToPet = function(li, pet) {
    li.setAttribute('id', 'pet' + pet.id);
    li.innerHTML = "";

    var petText = pet.name + " is a " + pet.pet_type + " ";
    var petTextNode = document.createTextNode(petText);
    li.appendChild(petTextNode);

    var edit = document.createElement('button');
    edit.innerHTML = "Edit";
    edit.addEventListener('click', function() {
      editPet(li, pet.name, pet.pet_type); // go to line 58
    });
    li.appendChild(edit);

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener('click', deletePet); //go to line 16
    li.appendChild(deleteButton);
  }

  var editPet = function(li, name, type) {
    li.innerHTML = '';
    var id = li.id.substring(3);

    //pet name input textbox
    var nameField = document.createElement('input');
    nameField.setAttribute('type', 'text');
    nameField.value = name;
    li.appendChild(nameField);

    //filler text
    var isA = document.createTextNode(' is a ');
    li.appendChild(isA);

    //pet type input textbox
    var typeField = document.createElement('input');
    typeField.setAttribute('type', 'text');
    typeField.value = type;
    li.appendChild(typeField);

    var updateButton = document.createElement('button');
    updateButton.innerHTML = 'Update';
    updateButton.addEventListener('click', function() {
      var newName = nameField.value;
      var newType = typeField.value;
      updatePet(li, newName, newType); //go to line 88
    });
    li.appendChild(updateButton);
  };

  var updatePet = function(li, newName, newType) {
    var id = li.id.substring(3);
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:3000/pets/' + id);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.addEventListener('load', function() {
      var returnedPet = JSON.parse(xhr.responseText);
      setLiToPet(li, returnedPet); //go to line 37
    });

    var updatedPet = {pet: { name: newName, pet_type: newType }};
    xhr.send(JSON.stringify(updatedPet));
  }

  var addNewPetButton = document.getElementById('addNewPet');
  addNewPetButton.addEventListener('click', function() {
    var newName = document.getElementById('newPetName');
    var newType = document.getElementById('newPetType');

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/pets');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.addEventListener('load', function() {
      var returnedPet = JSON.parse(xhr.responseText);
      addPet(returnedPet); //go to line 30
      newName.value = '';
      newType.value = '';
    });

    var newPet = { pet: {name: newName.value, pet_type: newType.value} };
    xhr.send(JSON.stringify(newPet));
  });
});
