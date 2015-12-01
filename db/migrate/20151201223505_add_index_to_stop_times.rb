class AddIndexToStopTimes < ActiveRecord::Migration
  def change
    add_index :fare_routes, :fare_id
    add_index :fare_routes, :route_id
    add_index :fares, :id
    add_index :routes, :id
    add_index :services, :id
    add_index :shapes, :shape_num
    add_index :stop_times, :id
    add_index :stop_times, :stop_id
    add_index :stop_times, :arrival_time
    add_index :stops, :id
    add_index :trips, :id
    add_index :trips, :route_id
    add_index :trips, :shape_id
  end
end
