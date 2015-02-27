// var hcky = function(){
//     this.goals = function(){
//       console.log("Rick Nash has scored " + 14);}
//     this.assists = function(){
//       console.log("Rick Nash has assists " + 7);}
//     this.points = function(){
//       console.log("Rick Nash has points " + 21);}
//     this.shots = function(){
//       console.log("Rick Nash has shots " + 73);}
//   }
//
//   var Nash = new hcky();
//
// Nash.goals();
// Nash.assists();
// Nash.points();
// Nash.shots();

var hcky = function(goals, assists, points, shots){
  this.goals = goals;
  this.assists = assists;
  this.points = points;
  this.shots = shots;
}

var nash = new hcky(14, 7, 21, 73);

console.log("Rick Nash has scored " + nash.goals + " goals. To go with " + nash.assists + " assists, " + nash.points + " points and " + nash.shots + " shots.");
