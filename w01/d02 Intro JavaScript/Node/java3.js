var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);
var z = parseInt(process.argv[4]);

if (x <= y){
  if (y <=z) {
    console.log(z);
  }
  else {
    console.log(y);
  }
}
else {
  console.log(x);
}
