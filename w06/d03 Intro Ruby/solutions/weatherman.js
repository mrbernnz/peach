/**
 * [con description]
 * @type {[type]}
 */
var con = process.argv[2];
var temp = process.argv[3];
/**
 * [weatherman description]
 * @param  {[type]} con  [description]
 * @param  {[type]} temp [description]
 * @return {[type]}      [description]
 */
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
