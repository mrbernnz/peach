require 'active_record'
class Character < ActiveRecord::Base
  def house
    House.find_by({id: self.house_id})
  end
end
# dinklage.house will go through the houses ids until it finds the house with an id that == dinklage's house_id
