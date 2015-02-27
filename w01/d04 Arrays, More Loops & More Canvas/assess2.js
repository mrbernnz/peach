var word = process.argv[2];
var vow = 0;

while (vow < word.length) {
  vow1 = word.charAt(vow);
  if (vow1 === "o") {
    console.log(vow1);
  }
  vow++;
}
