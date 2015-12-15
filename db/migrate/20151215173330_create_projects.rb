class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :summary
      t.text :description, null: false
      t.integer :goal_amt, null: false
      t.integer :current_amt, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :creator_id, null: false
      t.integer :category_id, null: false
      t.timestamps null: false
    end

    add_index :projects, :creator_id
    add_index :projects, :category_id
  end
end
