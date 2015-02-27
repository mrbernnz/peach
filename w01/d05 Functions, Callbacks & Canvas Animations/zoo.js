//an array of zoo animals
var anmlp = ["elephant", "alligator", "panda", "lion", "monkey", "koala", "tiger", "t-rex", "puffins", "dodo", "Crawford", "penguins"];
//function that inputs other functions
var an = function(x){
  x();
  console.log(anmlp);
}
//add kangaroo to the anmlp array
var add = function(){
  anmlp.push("kangaroo");
}
//remove doco from anmlp array because it's extinct
var rmv = function(){
  anmlp.splice(anmlp.indexOf("dodo"), 1);
  // for (var i = 0; i < anmlp.length; i++) {
  //   if (anmlp[i] === "dodo") {
  //     anmlp.splice(i, 1);
  //   }
  // }
}
//switch the tiger and the Crawford position in the anmlp array
var splc = function(){
  var name1 = anmlp.indexOf("Crawford");
  var name2 = anmlp.indexOf("tiger");
  anmlp[name1] = "tiger";
  anmlp[name2] = "Crawford";
  // for (var i = 0; i < anmlp.length; i++) {
  //   if (anmlp[i] === "Crawford"){
  //     anmlp.splice(i, 1, "tiger");
  //   }
  //     // if(anmlp[i] === "tiger") {
  //     //   anmlp.splice(i, 1, "Crawford");
  //     // }
  //   }
}
//sort the anmlp array by name
var srt = function(){
  anmlp.sort();
}
//reverse sort the anmlp array
var rvrs = function(){
  anmlp.reverse();
}
//print the anmlp array in the order of the functions being called
an(add);
an(rmv);
an(splc);
an(srt);
an(rvrs);
