class Ticket < ActiveRecord::Base
  belongs_to :workspace

  validates :title, presence: true, length: { minimum: 2, maximum: 64 }
  validates :description, length: { maximum: 1024 }
end
