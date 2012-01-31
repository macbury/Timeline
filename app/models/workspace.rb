class Workspace < ActiveRecord::Base
  validates :name, presence: true

  has_many :tickets, dependent: :destroy
  belongs_to :user
end
