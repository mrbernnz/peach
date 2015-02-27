var trtl = function(name, color, weapon){
    this.name = name;
    this.color = color;
    this.weapon = weapon;
    this.likesPizza = true;
    this.pizzaEaten = false,
    //function within the Leonardo object
    this.eatPizza = function() {
      //returns if true
      if (this.pizzaEaten) {
        console.log(this.name + " has already eaten pizza in his " + this.color + " bandana and put away his " + this.weapon + ".");
        //sets the key false when the if statement returns true
        this.pizzaEaten = false;
      }
      //returns if false
      else {
        console.log(this.name + " is eating pizza.");
        //sets the key true when the if statement  returns false
        this.pizzaEaten = true;
      }
    }
  }

  var lnrd = new
  trtl("Leonardo", "Blue", "Ninjato");

  lnrd.eatPizza();
  lnrd.eatPizza();
