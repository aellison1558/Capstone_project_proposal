class Updateprojectnumbertype < ActiveRecord::Migration
  def change
    change_column :projects, :goal_amt, :numeric
    change_column :backings, :amount, :numeric
  end
end
