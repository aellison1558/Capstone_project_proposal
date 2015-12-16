# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  author_id  :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :project_id, :author_id, :body, presence: true

  belongs_to :project
  belongs_to :author, class_name: :user
end
