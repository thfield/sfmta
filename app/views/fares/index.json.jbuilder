json.array!(@fares) do |fare|
  json.extract! fare, :id, :price, :currency_type, :payment_method, :transfers, :transfer_duration
  json.url fare_url(fare, format: :json)
end
