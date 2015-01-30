require 'express'
require 'httparty'
get '/' do 
  content_type :json
  data = {'premier_league'=> [{'team'=>'ARSENAL','manager'=>'ARSENE WENGER','captain'=>'MIKEL ARTETA'},{'team'=>'aston villa','manager'=>'paul lambert','captain'=>'ron vlaar'},{'team'=>'burnley','manager'=>'sean dyche','captain'=>'jason shackell'},{'team'=>'chelsea','manager'=>'jose mourinho','captain'=>'john terry'},{'team'=>'crystal palace','manager'=>'alan pardew','captain'=>'mile jedinak'}]}
  data each do |club|
    
  end
data.to_json
end
