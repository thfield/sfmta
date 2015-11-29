class CreateShapes < ActiveRecord::Migration
  def change
    create_table :shapes do |t|
      t.decimal :shape_pt_lon
      t.decimal :shape_pt_lat
      t.integer :shape_pt_sequence
      t.integer :shape_dist_traveled

      t.timestamps null: false
    end
  end
end
