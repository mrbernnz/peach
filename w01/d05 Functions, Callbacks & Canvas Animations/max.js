var numb = process.argv[2];
var numb2 = process.argv[3];

var max  = function(num, num2){
  if (num < num2) {
  return num2;
}
else {
  return(num2+ " isn't greater then " +num);
}
}
var ans = max(numb, numb2);
console.log(ans);
