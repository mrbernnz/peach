var a = parseInt(process.argv[2]);
var b = Math.floor(5 * Math.random());

if (a === b) {
  console.log("success");
}
else {
  console.log("Sorry, we were looking for " + b);
}
