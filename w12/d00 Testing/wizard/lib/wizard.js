var Wizard = function() {
  this.magicLevel = 5;
  this.health = 2;

  this.castSpell = function() {
    if(this.magicLevel > 0 && this.health > 0) {
      this.magicLevel -= 1;
      return true;
    }
    else {
      return false;
    }
  };

  this.regenSpell = function() {
    this.magicLevel = 5;
  };

  this.regenHealth = function() {
    this.health = 2;
  };

  this.hit = function() {
    if(this.health > 0) {
      this.health -= 1;
      return true;
    }
    else {
      return false;
    }
  };
};

module.exports = Wizard;
