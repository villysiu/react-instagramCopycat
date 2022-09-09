class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :url
      t.string :desc
      t.integer :likes
      t.integer :user_id

      t.timestamps
    end
  end
end
