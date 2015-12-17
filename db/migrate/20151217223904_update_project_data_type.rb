class UpdateProjectDataType < ActiveRecord::Migration
  def change
    change_column :projects, :goal_amt, :bigint
    change_column :backings, :amount, :bigint
  end
end
