class RemoveBylineFromArticles < ActiveRecord::Migration
  def change
    remove_column :articles, :byline
    add_column :articles, :author_id, :integer
    add_foreign_key :articles, :authors
  end
end
