process.stdin.on("data",function(data)
{
var newdata = data.toString().trim();
console.log(newdata);
});
