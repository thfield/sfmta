json.array!(@fare_routes) do |fare_route|
  json.extract! fare_route, :id, :fare_id, :route_id
  json.url fare_route_url(fare_route, format: :json)
end
