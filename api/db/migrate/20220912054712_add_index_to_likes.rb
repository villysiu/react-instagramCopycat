class AddIndexToLikes < ActiveRecord::Migration[6.1]
  def change
    add_index :likes, [:photo_id, :user_id], :unique => true

  end
end
