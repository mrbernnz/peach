require 'sinatra'
require 'pry'

students = {results[{name: 'Hermione Granger'},{name: 'Harry Potter'},{name: 'Ronald Weasley'},{name: 'Lord Voldemort'},{name: 'Draco Malfoy'},{name: 'Professor Severus Snape'},{name: 'Professor Albus Dumbledore'},{name: 'Ginny Weasley'},{name: 'Neville Longbottom'},{name: 'Luna Lovegood'},{name: 'Rubeus Hagrid'},{name: 'Remus Lupin'}]}
get '/students' do 
  erb :index, locals: {}
end
