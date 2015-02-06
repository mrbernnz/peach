class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.text :headline
      t.text :byline
      t.text :content
      t.text :photo_url

      t.timestamps null: false
    end
  end
end
