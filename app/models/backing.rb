# == Schema Information
#
# Table name: backings
#
#  id         :integer          not null, primary key
#  backer_id  :integer          not null
#  project_id :integer          not null
#  amount     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Backing < ActiveRecord::Base
  validates :backer_id, :project_id, :amount, presence: true
  validates :backer_id, uniqueness: { scope: :project_id }

  belongs_to :backer, class_name: :user
  belongs_to :project
end
