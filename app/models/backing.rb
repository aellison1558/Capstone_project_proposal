class Backing < ActiveRecord::Base
  validates :backer_id, :project_id, :amount, presence: true
  validates :backer_id, uniqueness: { scope: :project_id }

  belongs_to :backer, class_name: :user
  belongs_to :project
end
