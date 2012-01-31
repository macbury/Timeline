class Ticket < ActiveRecord::Base
  belongs_to :workspace

  validates :title, presence: true
end
