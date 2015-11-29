class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.string :route_short_name
      t.string :route_long_name
      t.integer :route_type

      t.timestamps null: false
    end
  end
end
