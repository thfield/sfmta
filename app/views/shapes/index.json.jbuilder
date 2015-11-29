json.array!(@shapes) do |shape|
  json.extract! shape, :id, :shape_pt_lon, :shape_pt_lat, :shape_pt_sequence, :shape_dist_traveled
  json.url shape_url(shape, format: :json)
end
