var day = process.argv[2];

if (day === "saturday" || day === "sunday") {
  console.log("weekend");
} else {
  console.log("weekday");
}
