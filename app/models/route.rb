class Route < ActiveRecord::Base
  has_many :trips
  has_one :fare_route
  has_one :fare, through: :fare_route
end
