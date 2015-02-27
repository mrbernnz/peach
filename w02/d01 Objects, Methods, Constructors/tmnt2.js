var tmnt = function(name, color, weapon){
  this.name = name;
  this.color = color;
  this.weapon = weapon;
}

var lrnd = new tmnt("Leonardo", "Blue", "Ninjato");
var mchlngl = new tmnt("Michelangelo", "Orange", "Nunchucks");
var rphl = new tmnt("Raphael", "Red", "Sai");
var dntll = new tmnt("Donatello", "Purple", "Bo");

var tmnt2 = [];
tmnt2.push(lrnd, mchlngl, rphl, dntll);
console.log(tmnt2);
