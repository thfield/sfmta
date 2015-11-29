json.array!(@stops) do |stop|
  json.extract! stop, :id, :stop_name, :stop_lat, :stop_lon
  json.url stop_url(stop, format: :json)
end
