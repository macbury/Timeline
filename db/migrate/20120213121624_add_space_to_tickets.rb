class AddSpaceToTickets < ActiveRecord::Migration
  def change
    add_column :tickets, :space, :integer, :default => Ticket::BackLog

  end
end
