class FareRoute < ActiveRecord::Base
  belongs_to :fare
  belongs_to :route
end
