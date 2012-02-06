class AddStatusToTickets < ActiveRecord::Migration
  def change
    add_column :tickets, :status, :integer, default: Ticket::Pending

  end
end
