class Workspace < ActiveRecord::Base
  validates :name, presence: true

  has_many  :tickets, dependent: :destroy
  
  has_many  :members, dependent: :destroy 
  has_many  :users, through: :members
end
