class AddStopidToStoptimes < ActiveRecord::Migration
  def change
    add_column :stop_times, :stop_id, :integer
  end
end
