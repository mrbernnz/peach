class Wizard
  attr_reader :magic
  attr_reader :health

  def initialize
    @magic = 5
    @health = 2
  end

  def cast_spell
    if @magic > 0 && @health > 0
      @magic -= 1
      true
    else
      false
    end
  end

  def regenerate_magic
    @magic = 5
  end

  def regenerate_health
    @health = 2
  end

  def hit
    if @health > 0
      @health -= 1
      true
    else
      false
    end
  end
end
