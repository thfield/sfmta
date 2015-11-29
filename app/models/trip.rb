class Trip < ActiveRecord::Base
  belongs_to :route
  belongs_to :service
  has_many :stop_times
  has_many :shapes, foreign_key: "shape_num", primary_key: "shape_id"
end
