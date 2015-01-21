var teams = ['Orioles', 'Red Sox', 'Yankees', 'Rays', 'Blue Jays', 'White Sox', 'Indians', 'Tigers', 'Royals', 'Twins', 'Astros', 'Angels', 'Athletics', 'Mariners', 'Rangers', 'Braves', 'Marlins', 'Mets', 'Phillies', 'Nationals', 'Cubs', 'Reds', 'Brewers', 'Pirates', 'Cardinals', 'Diamondbacks', 'Rockies', 'Dodgers', 'Padres', 'Giants'];

var cities = ['Baltimore', 'Boston', 'New York', 'Tampa', 'Toronto', 'Chicago', 'Cleveland', 'Detroit', 'Kansas City', 'Minnesota', 'Houston', 'Los Angeles', 'Oakland', 'Seattle', 'Texas', 'Atlanta', 'Miami', 'Philadelphia', 'Washington', 'Cincinatti', 'Milwaukee', 'Pittsburgh', 'St. Louis', 'Arizona', 'Colorado', 'San Diego', 'San Fransisco'];

var coaches = ['Buck Showalter', 'John Farrell', 'Robin Ventura', 'Terry Francona', 'Brad Ausmus', 'A.J. Hinch', 'Ned Yost', 'Mike Scioscia', 'Paul Molitor', 'Joe Girardi', 'Bob Melvin', 'Lloyd McClendon', 'Kevin Cash', 'Jeff Banister', 'John Gibbons', 'Chip Hale', 'Fredi Gonzalez', 'Joe Maddon', 'Bryan Price', 'Walt Weiss', 'Don Mattingly', 'Mike Redmond', 'Ron Roenicke', 'Terry Collins', 'Ryne Sandberg', 'Clint Hurdle', 'Mike Matheny', 'Bud Black', 'Bruce Bochy', 'Matt Williams'];

var logos = [
             'http://mlb.mlb.com/mlb/images/team_logos/logo_bal_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_bos_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_cws_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_cle_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_det_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_hou_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_kc_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_ana_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_min_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_nyy_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_oak_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_sea_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_tb_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_tex_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_tor_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_ari_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_atl_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_chc_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_cin_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_col_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_la_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_mia_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_mil_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_nym_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_phi_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_pit_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_sd_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_sf_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_stl_79x76.jpg',
             'http://mlb.mlb.com/mlb/images/team_logos/logo_was_79x76.jpg'
             ]

var generateRandomTeam = function() {
  var teamNumber = Math.floor(teams.length * Math.random());
  var cityNumber = Math.floor(cities.length * Math.random());
  var coachNumber = Math.floor(coaches.length * Math.random());
  var logoNumber = Math.floor(logos.length * Math.random());

  var randomTeam = {
    team: teams[teamNumber],
    city: cities[cityNumber],
    coach: coaches[coachNumber],
    logo: logos[logoNumber]
  };

  return randomTeam;
};

// server starts here 

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(req, res) {
  res.json(generateRandomTeam());
});

app.post('/addTeam', function(req, res) {
  var city = req.body.city;
  var team = req.body.team;
  var coach = req.body.coach;
  var logo = req.body.logo;

  if(city !== '') {
    cities.push(city);
  }

  if(team !== '') {
    teams.push(team);
  }

  if(coach !== '') {
    coaches.push(coach);
  }

  if(logo !== '') {
    logos.push(logo);
  }

  res.sendFile(__dirname + '/public/random_team.html');
});

app.listen(3000);

console.log('Server is listening on port 3000');
