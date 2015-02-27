var lnrd = {
  name: "Leonardo",
  color: "blue",
  weapons: "ninjato",
  nameAfter: "Leonardo da Vinci",
  likesPizza: "true"
}

var mchlngl = {
  name: "Michelangelo",
  color: "orange",
  weapons: "nunchucks",
  nameAfter: "Michelangelo Buonarroti",
  likesPizza: "true"
}

var rphl = {
  name: "Raphael",
  color: "red",
  weapons: "sai",
  nameAfter: "Raffaello Sanzio da Urbino",
  likesPizza: "true"
}

var dntll = {
  name: "Donatello",
  color: "purple",
  weapons: "bo",
  nameAfter: "Donato di Niccolo di Betto Bardi",
  likesPizza: "true"
}

var trtls = [lnrd, mchlngl, rphl, dntll];

for (var i = 0; i < trtls.length; i++) {

  console.log(trtls[i]["name"] + " wears a " +  ["color"] + " bandana, his weapon is " + ["weapons"] + ", he is named after " + ["nameAfter"] + ", and he likes pizza.");

// console.log(name+ " wears a " +color+ " bandana, his weapon is " +weapons+ ", he is named after " +nameAfter+ ", and he likes pizza."
// );

}
