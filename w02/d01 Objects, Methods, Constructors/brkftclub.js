var name = process.argv[2];
var club = {
  " Andrew Clark ": "Emilio Estevez",
  " Richard Vernon ": "Paul Gleason",
  " Brian Johnson ": "Anthony Michael Hall",
  " Allison Reynolds ": "Ally Sheedy",
  " John Bender ": "Judd Nelson"
}
var keys = Object.keys(club);

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  var value = club[key];
  if (name === key) {
    console.log(value);
  }
}
