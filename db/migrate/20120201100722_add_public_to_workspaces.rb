class AddPublicToWorkspaces < ActiveRecord::Migration
  def change
    add_column :workspaces, :public, :boolean, default: true

  end
end
