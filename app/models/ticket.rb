class Ticket < ActiveRecord::Base
  Pending = 0
  Started = 1
  Finished = 3
  Delivered = 4
  Accepted = 5
  Rejected = 6

  belongs_to :workspace

  validates :title, presence: true, length: { minimum: 2, maximum: 64 }
  validates :description, length: { maximum: 1024 }

  attr_protected :workspace_id
end
