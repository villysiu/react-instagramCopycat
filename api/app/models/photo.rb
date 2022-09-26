class Photo < ApplicationRecord
    has_one_attached :url
    belongs_to :user
    has_many :likes, dependent: :destroy
end
