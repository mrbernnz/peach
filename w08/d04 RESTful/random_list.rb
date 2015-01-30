require 'httparty'

thoughts = []
big_counter = 0
while big_counter < 100
  response = HTTParty.get("http://randomthoughts.link/thought")

  if thoughts.length == 0
    thoughts<<response["thought"]
  else
    counter = 0
    present = 0
    while counter < thoughts.length
      if response["thought"] == thoughts[counter]
        present += 1
        counter += 1
      else
        counter += 1
      end
    end
    if present == 0
      thoughts<<response["thought"]

    end
    big_counter += 1

  end
end
puts thoughts
