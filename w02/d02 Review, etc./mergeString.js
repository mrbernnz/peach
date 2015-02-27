var stgs = ["Larry", "Curly", "Moe"];

// stooge now equals "Hey there, Larry. Hey there, Curly. Hey there, Moe."
var mrgstrng = function(){
  for (var i = 0; i < stgs.length; i++) {
    console.log("Hey there, " + stgs[i] + ".");
  }
}

mrgstrng();
