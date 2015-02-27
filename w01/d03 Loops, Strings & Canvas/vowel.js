var word = process.argv[2];
var vow1 = 0;

while (vow1 < word.length) {
  var vow2 = word.charAt(vow1);
  if (vow2 === "a" || vow2 === "e" || vow2 === "i" || vow2 === "o" || vow2 === "u"){
    console.log(vow2);
    }
    vow1++;
  }
