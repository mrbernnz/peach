var Person = function (name, age){
  this.name = name;
  this.age = age;
  this.hwold = function (){
    this.age++
    console.log("You are " + this.age + " old.");
  }
}

var sean = new Person("sean", 30);

sean.hwold();
