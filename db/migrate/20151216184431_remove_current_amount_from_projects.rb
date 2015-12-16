class RemoveCurrentAmountFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :current_amt, :integer, null: false
  end
end
