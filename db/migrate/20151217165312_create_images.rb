class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.references :imageable, polymorphic: true, index: true
      t.string :image_public_id, null: false
      t.timestamps null: false
    end
  end
end
