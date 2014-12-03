var f = function() {
  debugger;
  var x = 3;
  var y = 4;
  return x;
  console.log("will not get here");
  console.log("nor here");
  return y;
}

var z = f();
console.log(z);
