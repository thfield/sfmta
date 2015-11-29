json.array!(@services) do |service|
  json.extract! service, :id, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, :start_date, :end_date
  json.url service_url(service, format: :json)
end
