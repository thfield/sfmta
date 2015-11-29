class CreateStopTimes < ActiveRecord::Migration
  def change
    create_table :stop_times do |t|
      t.integer :trip_id
      t.datetime :arrival_time
      t.datetime :departure_time
      t.integer :stop_sequence

      t.timestamps null: false
    end
  end
end
