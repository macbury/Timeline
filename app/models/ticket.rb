class Ticket < ActiveRecord::Base
  Pending = 0
  Started = 1
  Finished = 3
  Delivered = 4
  Accepted = 5
  Rejected = 6

  BackLog = 0
  Current = 1
  Done = 2

  scope :inBackLog, where(:status => Ticket::BackLog)
  scope :inCurrent, where(:status => Ticket::Current)
  scope :inDone, where(:status => Ticket::Done)

  belongs_to :workspace

  validates :title, presence: true, length: { minimum: 2, maximum: 128 }
  validates :description, length: { maximum: 1024 }

  attr_protected :workspace_id, :space
  after_create :setup_position!

  def backLog?
    self.space == Ticket::BackLog
  end

  def current?
    self.space == Ticket::Current
  end

  def done?
    self.space == Ticket::Done
  end

  def rejected?
    self.status == Ticket::Rejected
  end

  def accepted?
    self.status == Ticket::Accepted
  end

  def delivered?
    self.status == Ticket::Delivered
  end

  def finished?
    self.status == Ticket::Finished
  end

  def started?
    self.status == Ticket::Started
  end

  def pending?
    self.status == Ticket::Pending
  end

  def status=(new_status)
    old_status = read_attribute :status
    return old_status if old_status == new_status
    write_attribute :status, new_status
    old_space = self.space
    if pending? || rejected?
      Rails.logger.info "Moved to backlog"
      self.space = Ticket::BackLog 
    elsif accepted?
      Rails.logger.info "Moved to Done"
      self.space = Ticket::Done
    else
      Rails.logger.info "Moved to current"
      self.space = Ticket::Current
    end

    setup_position if old_space != self.space
  end

  def setup_position
    self.position = self.workspace.tickets.where(:space => self.space).maximum(:position) || 0
    self.position += 1
    Rails.logger.debug "Moving to position #{self.position}"
  end

  def setup_position!
    self.setup_position
    self.save
  end
end
