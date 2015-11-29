class Trip < ActiveRecord::Base
  belongs_to :route
  belongs_to :service
  has_many :stop_times
  has_one :shape
end
