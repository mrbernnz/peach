class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.text :name
      t.text :pet_type

      t.timestamps null: false
    end
  end
end
