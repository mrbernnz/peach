require 'active_record'
class House < ActiveRecord::Base
  def characters
    Character.where({house_id: self.id})
  end
end
# slytherin.characters will to thru the characters table and return all characters that have the same house_id as slytherin's id.
