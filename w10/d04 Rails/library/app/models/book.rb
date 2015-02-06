class Book < ActiveRecord::Base
  belongs_to(:author)

  # validates :title, presence: true
  # validates :content, presence: true
  # validates :content, length:{
  #   maximum: 5,
  #   too long: 'TOO LONG'
  # }
  # validates_length_of :content, minium: 3
end
