// EIEInope
//
var arg = process.argv[2].toLowerCase()
var vowelCount = 0
for(var i = 0; i<arg.length; i++) {
  if (arg[i] === "a" || arg[i] === "e" || arg[i] === "i" || arg[i] === "o" || arg[i] === "u") {
    vowelCount ++;
  }
}
console.log(vowelCount);

//
// BONUS 1
// var arg = process.argv[2].toLowerCase()
// var vowelcheck = 0
// var vowelspot = []
// var vowelCount = 0
// for(var i = 0; i<arg.length; i++) {
//   if (arg[i] === "a" || arg[i] === "e" || arg[i] === "i" || arg[i] === "o" || arg[i] === "u") {
//     vowelCount ++
//     vowelspot.push(i)
//     if (i === arg.length - 1 && vowelCount > 1){
//       for(var j = 0; j<vowelspot.length; j++) {
//         if (vowelspot[j] - vowelspot[j + 1] === -1 ) {
//           console.log("nope")
//           break
//         } else if (j === vowelspot.length - 1){
//           console.log("it checks out")
//         }
//       }
//     }
//   }
// }
//
// Bonus 2
// var arg = process.argv[2].toLowerCase()
// var consonant = []
// var vowelcheck = 0
// var vowelspot = []
// var vowelCount = 0
// for(var i = 0; i<arg.length; i++) {
//   if (arg[i] === "a" || arg[i] === "e" || arg[i] === "i" || arg[i] === "o" || arg[i] === "u") {
//     vowelCount ++
//     vowelspot.push(i)
//   } else {
//     consonant.push(arg[i])
//   }
//   if (i === arg.length - 1 && vowelCount > 1){
//     for(var j = 0; j<vowelspot.length; j++) {
//       if (vowelspot[j] - vowelspot[j + 1] === -1 ) {
//         console.log("nope")
//         break
//       } else if (j === vowelspot.length - 1){
//         console.log(consonant)
//       }
//     }
//   }
// }
//
//
// stuck in the middle with args
// var arg1 = parseInt(process.argv[2])
// var arg2 = parseInt(process.argv[3])
// var lower
// var upper
// if (arg1 > arg2) {
//   upper = arg1;
//   lower = arg2;
// } else {
//   upper = arg2;
//   lower = arg1;
// }
//
// var rando = Math.floor(Math.random()*10)
// if (lower > rando) {
//   console.log("too cold")
//   console.log(rando + " " + lower + " " + upper)
// } else if (upper < rando) {
//   console.log("too hot")
//   console.log(lower + " " + upper + " " + rando)
// } else {
//   console.log("just right")
//   console.log(lower + " " + rando + " " + upper)
// }
//
// even on a jet plane
// var stringArr = process.argv
// for (var i = 2; i<stringArr.length; i++) {
//   if (stringArr[i].length % 2 === 0) {
//     console.log(stringArr[i])
//   }
// }
//
// we want the func
// var num = process.argv[2]
// var string = process.argv[3]
// var evenator = function(num, string) {
//   if (num % 2 === 0) {
//     console.log(string)
//   } else {
//     console.log(string.split("").reverse().join(""))
//   }
// }
// evenator(num, string)
//
//
// gotta have the func
// var counter = 0
// var sayHi = function() {
//   console.log("BASS IN YER FACE");
//   counter++;
//   if(counter === 4){
//     clearInterval(refreshIntervalId);
//   };
// }
//
// var refreshIntervalId = setInterval(sayHi, 3000);
//
// foreman swears he learned his math
//
// var Dozer = function(name, color) {
//   this.name = name;
//   this.color = color;
//   this.backup = function() {
//     console.log("THE DOZER WILL NOT CLEAR A PATH")
//   }
// }
// var Bob = new Dozer("Rivers", "Blue")
// console.log(Bob.name)
// console.log(Bob.color)
// Bob.backup()
//
// it's a final countdown
// var body = document.querySelector("body")
// var p = document.createElement("p")
// body.appendChild(p)
// var counter = 10
// var countdown = function() {
//   p.innerText = counter;
//   counter --;
//   if(counter < 0){
//     p.innerText = 0;
//     body.setAttribute("style", "background-color: red; color: white")
//     clearInterval(refreshIntervalId);
//   }
// }
//
// var refreshIntervalId = setInterval(countdown, 1000);
