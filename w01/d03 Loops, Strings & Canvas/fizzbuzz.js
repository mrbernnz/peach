var x = 0;

while (x < 100){
  x++
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FIZZBUZZ");
  }
  else if (x % 5 === 0){
    console.log("BUZZ");
  }
  else if (x % 3 === 0){
    console.log("FIZZ");
  }
  else {
    console.log(x);
  }
}
