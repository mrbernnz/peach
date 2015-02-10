class AddColumnToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :recipe_name, :text
    add_column :recipes, :ingredients, :text
    add_column :recipes, :instructions, :text
  end
end
