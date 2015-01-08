var con = process.argv[2];
var temp = process.argv[3];

function weatherman(con, temp)
{
	if (con === "rainy" && temp === "cold")
	{
		return "Stay inside";
	}
	else if (con === "rainy" && temp === "hot")
	{
		return "Sounds gross";
	}
}
console.log(weatherman(con,temp));