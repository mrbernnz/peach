1    
  ⁃   command line
  ⁃   one argument (english word) 
  ⁃   two “o” in word
  ⁃   “valid” “invalid”
var word = process.arg[2];
var

1    
  ⁃   along side each other (“o)

####Solution
```js
var word = process.argv[2]
var counter = 0
var twoo = ""

while (counter < word.length) {
  if (word[counter] === "o" && word[counter + 1] === "o")
    twoo = twoo + word[counter]
    counter ++
};

if (twoo === "o") {
  console.log("valid")
}
else {
  console.log("invalid")
};
```
