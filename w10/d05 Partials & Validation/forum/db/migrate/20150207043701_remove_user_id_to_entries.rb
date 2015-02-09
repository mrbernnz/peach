class RemoveUserIdToEntries < ActiveRecord::Migration
  def change
    remove_column :entries, :user_id, :integer
  end
end
