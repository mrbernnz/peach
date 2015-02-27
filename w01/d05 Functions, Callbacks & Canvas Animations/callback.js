var i = 0;
var grt = function(){

  if (i < 10) {
    console.log("Hello");
    i++
  }
  else {
    clearInterval(tm)
  }
}

var tm = setInterval(grt, 20);
