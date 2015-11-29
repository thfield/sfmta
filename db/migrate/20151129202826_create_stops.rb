class CreateStops < ActiveRecord::Migration
  def change
    create_table :stops do |t|
      t.string :stop_name
      t.decimal :stop_lat
      t.decimal :stop_lon

      t.timestamps null: false
    end
  end
end
