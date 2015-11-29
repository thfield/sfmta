class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.integer :route_id
      t.integer :service_id
      t.string :trip_headsign
      t.integer :direction_id
      t.integer :block_id
      t.integer :shape_id

      t.timestamps null: false
    end
  end
end
