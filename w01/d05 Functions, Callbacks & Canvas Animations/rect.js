var num1 = process.argv[2];
var num2 = process.argv[3];

var ar  = function(width, height){
  area = (width * height);
  return area;
}
var ans = ar(num1, num2);
console.log(ans);
