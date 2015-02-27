var nyear = [10,9,8,7,6,5,4,3,2,1,"HAPPY NEW YEAR!"];
var i = 0;

var countDown = function(){
if (i < nyear.length) {
   console.log(nyear[i]);
   i++;
  }
  else {
    clearInterval(ny);
  }
}

var ny = setInterval(countDown, 1000);
