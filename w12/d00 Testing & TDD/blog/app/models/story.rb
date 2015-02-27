class Story < ActiveRecord::Base
  validates :author, presence: true
  validates :content, presence: true
  validates :content, length: { maximum: 500 }
  validates :title, uniqueness: true
end
