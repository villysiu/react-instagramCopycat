class Photo < ApplicationRecord
    belongs_to :user
    has_many :likes, dependent: :destroy
end
