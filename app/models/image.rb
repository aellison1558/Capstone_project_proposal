# == Schema Information
#
# Table name: images
#
#  id              :integer          not null, primary key
#  imageable_id    :integer
#  imageable_type  :string
#  image_public_id :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Image < ActiveRecord::Base
  validates :imageable_id, :imageable_type, :image_public_id, presence: true

  belongs_to :imageable, polymorphic: true
end
