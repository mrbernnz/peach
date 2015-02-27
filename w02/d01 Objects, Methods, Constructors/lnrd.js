//leonardo object
var lnrd = {
  name: "Leonardo",
  color: "blue",
  weapons: "ninjato",
  nameAfter: "Leonardo da Vinci",
  likesPizza: true,
  pizzaEaten: false,
  //function within the Leonardo object
  eatPizza: function() {
    //returns if true
    if (this.pizzaEaten) {
    console.log("Leonard has already eaten pizza.");
    //sets the key false when the if statement returns true
    this.pizzaEaten = false;
  }
  //returns if false
  else {
    console.log("Leonardo is eating pizza");
    //sets the key true when the if statement  returns false
    this.pizzaEaten = true;
  }
}
}
//prints the value of the "eatPizza" key
lnrd.eatPizza();
lnrd.eatPizza();
