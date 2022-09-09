class RemoveLikesFromPhotos < ActiveRecord::Migration[6.1]
  def change
    remove_column :photos, :likes, :integer
  end
end
