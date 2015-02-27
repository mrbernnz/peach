require_relative '../lib/wizard'

=begin
x A wizard can cast a spell.
x A wizard can cast 5 spells before they run out of magic.
x A wizard's magic can be regenerated to 5 spells
x A wizard can be hit by a spell
x A wizard can be hit a maximum of 2 times before they die
x A dead wizard cannot cast spells
A dead wizard can be brought back from the dead
=end

describe Wizard do
  let(:wizard) { Wizard.new }

  describe ".new" do
    it "should create a wizard" do
      expect(wizard).to_not eq nil
    end

    it "should have a magic level of 5" do
      expect(wizard.magic).to eq 5
    end

    it "should have a health of 2" do
      expect(wizard.health).to eq 2
    end
  end

  describe "#cast_spell" do
    it "should cast a spell" do
      expect(wizard.cast_spell).to eq true
    end

    it "should be run out of magic after casting 5 spells" do
      5.times { wizard.cast_spell}
      expect(wizard.cast_spell).to eq false
    end

    it "should not be able to cast spells if dead" do
      2.times { wizard.hit }
      expect(wizard.cast_spell).to eq false
    end
  end

  describe "#regenerate_magic" do
    it "should regenerate magic level to 5" do
      5.times { wizard.cast_spell}
      wizard.regenerate_magic
      expect(wizard.magic).to eq 5
    end
  end

  describe "#hit" do
    it "should decrease health by 1" do
      wizard.hit
      expect(wizard.health).to eq 1
    end

    it "should return true if wizard has not been hit twice" do
      expect(wizard.hit).to eq true
    end

    it "should return false if wizard has been hit twice" do
      2.times { wizard.hit }
      expect(wizard.hit).to eq false
    end
  end

  describe "#regenerate_health" do
    it "should regenerate health level to 2" do
      2.times { wizard.hit }
      wizard.regenerate_health
      expect(wizard.health).to eq 2
    end
  end
end
