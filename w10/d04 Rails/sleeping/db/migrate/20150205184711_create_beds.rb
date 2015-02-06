class CreateBeds < ActiveRecord::Migration
  def change
    create_table :beds do |t|
      t.text :mattress
      t.text :sheets
      t.text :pillows

      t.timestamps null: false
    end
  end
end
