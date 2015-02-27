var x = 101;

while (x > 1){
  x--
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FIZZBACK");
  }
  else if (x % 5 === 0){
    console.log("BACK");
  }
  else if (x % 3 === 0){
    console.log("FIZZ");
  }
  else {
    console.log(x);
  }
}
