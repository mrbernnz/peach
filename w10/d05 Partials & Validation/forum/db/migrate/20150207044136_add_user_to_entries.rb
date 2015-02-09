class AddUserToEntries < ActiveRecord::Migration
  def change
    add_reference :entries, :users, index: true
  end
end
