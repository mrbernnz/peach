class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.text :title
      t.text :content

      t.timestamps null: false
    end
  end
end
