class CreateFareRoutes < ActiveRecord::Migration
  def change
    create_table :fare_routes do |t|
      t.integer :fare_id
      t.integer :route_id

      t.timestamps null: false
    end
  end
end
