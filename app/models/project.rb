# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  summary     :string
#  description :text             not null
#  goal_amt    :integer          not null
#  current_amt :integer          not null
#  start_date  :date             not null
#  end_date    :date             not null
#  creator_id  :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ActiveRecord::Base
  validates(
      :title,
      :description,
      :goal_amt,
      :current_amt,
      :start_date,
      :end_date,
      :creator_id,
      :category_id,
      presence: true
      )

  belongs_to :creator, class_name: :user
  belongs_to :category

  has_many :backings
  has_many :backers, through: :backings
end
