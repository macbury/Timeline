class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.integer :workspace_id
      t.string :title
      t.text :description
      t.integer :requested_by_id
      t.integer :owned_by_id

      t.timestamps
    end
  end
end
