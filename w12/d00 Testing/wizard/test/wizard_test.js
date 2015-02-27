/*
Here are the user stories for the Wizard:

x A wizard can cast a spell.
x A wizard can cast 5 spells before they run out of magic.
x A wizard's magic can be regenerated to 5 spells
xA wizard can be hit by a spell
xA wizard can be hit a maximum of 2 times before they die
xA dead wizard cannot cast spells
xA dead wizard can be brought back from the dead
*/

var Wizard = require('../lib/wizard');
var assert = require('assert');

var w;

describe("A wizard", function() {
  beforeEach(function() {
    w = new Wizard();
  });

  describe("#castSpell", function() {
    it("should return true if magicLevel is not 0", function() {
      assert.equal(true, w.castSpell());
    });

    it("should be able to cast 5 spells before running " +
       "magic", function() {
         assert.equal(5, w.magicLevel);
         for(var i = 0; i < 5; i++) {
           w.castSpell();
         }
         assert.equal(0, w.magicLevel);
       });
    it("should not be able to cast spells if magicLevel is 0", function() {
      for(var i = 0; i < 5; i++) {
        w.castSpell();
      }
      assert.equal(false, w.castSpell());
    });

    it("should not be able to cast spells if health is 0", function() {
      w.hit();
      w.hit();
      assert.equal(false, w.castSpell());
    });
  });

  describe("#regenSpell", function() {
    it("should regenerate magic level to 5", function() {
      // given
      w.castSpell();
      w.castSpell();

      //when
      w.regenSpell();

      //then
      assert.equal(5, w.magicLevel);
    });
  });

  describe("#hit", function() {
    it("should return true if wizard is undead", function() {
      assert.equal(true, w.hit());
    });

    it("should not be able to be hit more than 2 times", function() {
      w.hit();
      w.hit();
      assert.equal(false, w.hit());
    });

    it("should reduce the health by one when hit", function() {
      w.hit();
      assert.equal(1, w.health);
    })
  });

  describe("#regenHealth", function() {
    it("should set health to 2", function() {
      //given
      w.hit();
      w.hit();

      //when
      w.regenHealth();

      //then
      assert.equal(2, w.health);
    });
  });
});
