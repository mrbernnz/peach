//take movie title as argument
var mvttl = process.argv[2];
//take directors name as argument
var drctrnm = process.argv[3];
//rating between 0-2
var rtng = parseInt(process.argv[4]);

// Create a constructor that takes the movie name and director name as parameters. And takes in a rating between 0-2.
var mv = function(mvname, mvdrctr, rate){
  this.mvname = mvname;
  this.mvdrctr = mvdrctr;
  this.rate = rate;
  //add a function to the constructor that takes rating as an argument.
  this.rtng1 = function(){
    //if rating is 0, print "Unfortunately, it gets two thumbs down."
    if (this.rate === 0) {
      return "Unfortunately, it gets two thumbs down.";
    }
    //if rating is 1, print "One thumb up, one thumb down."
    else if (this.rate === 1) {
    return "One thumb up, one thumb down.";
    }
    //if rating is 2, print "TWO THUMBS UP!!!"
    else (this.rate === 2){
      return "TWO THUMBS UP!!!";
    }
  }
}
// creates an instance of the movie object.
mv1 = new mv(mvttl, drctrnm, rtng);
//"MOVIE TITLE came out this past weekend, it was directed by DIRECTOR."
console.log(mvttl + " came out this past weekend, it was directed by " + drctrnm + ". " + mv1.rtng1());
