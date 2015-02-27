var fun = ["pretzels", "cheez-its", "m&ms"];
var work = ["raisins", "dried apricots", "nuts", "peels"];
var cmb = (fun, work);
var trailMix = [];

var mrgarr = function(){
  for (var i = 0; i < cmb.length; i++) {
    trailMix.push(fun[i]);
    trailMix.push(work[i]);
  }
    // for (var j = 0; j < work.length; j++) {
    //   trailMix.push(work[j]);
    // }

  return trailMix;
}

console.log(mrgarr(trailMix));
