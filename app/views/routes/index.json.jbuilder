json.array!(@routes) do |route|
  json.extract! route, :id, :route_short_name, :route_long_name, :route_type
  json.url route_url(route, format: :json)
end
