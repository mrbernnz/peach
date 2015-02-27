// var button = document.querySelector("#button");
//
// var chckbx = function() {
//   if (document.getElementById("chckbx").checked === true){
//     alert("Checked");
//   }
//   else {
//     alert("Empty");
//   }
// }
//
// button.addEventListener("click", chckbx);

var nmb1 = document.querySelector(".nmb");
var nmb2 = document.querySelector(".nmb");
var addbttn = document.querySelector("#add");
var subbttn = document.querySelector("#sub");
var mltbttn = document.querySelector("#mlt");
var divbttn = document.querySelector("#div");
var ans = document.querySelector("#ans");

function add(){
  var sum1 = parseInt(nmb1.value) + parseInt(nmb2.value);
  ans.value = sum1;
}
function sub(){
  var sum2 = parseInt(nmb1.value) - parseInt(nmb2.value);
  sum2 = ans.value;
  alert(sum2);
}
function mlt(){
  var sum3 = parseInt(nmb1.value) * parseInt(nmb2.value);
  sum3 = ans.value;
  alert(sum3);
}
function div(){
  var sum4 = parseInt(nmb1.value) * parseInt(nmb2.value);
  sum4 = ans.value;
  alert(sum4);
}
addbttn.addEventListener("click", add);
subbttn.addEventListener("click", sub);
mltbttn.addEventListener("click", mlt);
divbttn.addEventListener("click", div);
