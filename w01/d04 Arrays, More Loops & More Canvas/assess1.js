/*var word = process.argv[2];
var vow = 0;
var vow1 = " ";

while (vow < word.length) {
  vow2 = word.charAt(vow);
  if (vow2 === "o") {
    console.log("Valid");
  }
  else {
    console.log("Invalid");
  }
  vow++
}*/


var word = process.argv[2];
var vow = 0;
var vow1 = "";

while (vow < word.length) {
  if (word[vow] === "o") {
    vow1 = vow1 + word[vow];
    console.log();
    }
    vow++
  }
