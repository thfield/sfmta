desc "init db"
namespace :data do

  task init_all: :environment do
    require 'csv'
    Dir.chdir(Rails.root + 'lib/assets/sfmta_gtfs')
    Route.delete_all
    Fare.delete_all
    FareRoute.delete_all
    Service.delete_all
    Shape.delete_all
    StopTime.delete_all
    Stop.delete_all
    Trip.delete_all
    CSV.foreach('routes.txt', :headers => true) do |row|
      Route.create!({
        :id               => row[0],
        :route_short_name => row[2],
        :route_long_name  => row[3],
        :route_type       => row[5]
        })
    end
    CSV.foreach('fares.txt', :headers => true) do |row|
      Fare.create!({
        :id                 => row[0],
        :price              => row[1],
        :currency_type      => row[2],
        :payment_method     => row[3],
        :transfers          => row[4],
        :transfer_duration  => row[5]
        })
    end
    CSV.foreach('fare_route.txt', :headers => true) do |row|
      FareRoute.create!({
        :fare_id  => row[0],
        :route_id => row[1]
        })
    end
    CSV.foreach('services.txt', :headers => true) do |row|
      Service.create!({
        :id         => row[0],
        :monday     => row[1],
        :tuesday    => row[2],
        :wednesday  => row[3],
        :thursday   => row[4],
        :friday     => row[5],
        :saturday   => row[6],
        :sunday     => row[7],
        :start_date => row[8],
        :end_date   => row[9]
        })
    end
    CSV.foreach('shapes.txt', :headers => true) do |row|
      Shape.create!({
        :shape_num             => row[0],
        :shape_pt_lon          => row[1],
        :shape_pt_lat          => row[2],
        :shape_pt_sequence     => row[3],
        :shape_dist_traveled   => row[4]
        })
    end
    CSV.foreach('stop_times.txt', :headers => true) do |row|
      StopTime.create!({
        :trip_id        => row[0],
        :arrival_time   => row[1],
        :departure_time => row[2],
        :stop_id        => row[3],
        :stop_sequence  => row[4]
        })
    end
    CSV.foreach('stops.txt', :headers => true) do |row|
      Stop.create!({
        :id        => row[0],
        :stop_name => row[1],
        :stop_lat  => row[3],
        :stop_lon  => row[4]
        })
    end
    CSV.foreach('trips.txt', :headers => true) do |row|
      Trip.create!({
        :route_id      => row[0],
        :service_id    => row[1],
        :id            => row[2],
        :trip_headsign => row[3],
        :direction_id  => row[4],
        :block_id      => row[5],
        :shape_id      => row[6]
        })
    end
  end

end
#http://stackoverflow.com/questions/4410794/ruby-on-rails-import-data-from-a-csv-file
#command: rake data:init_all
