desc "intit db"
namespace :data do
  task :load_routes, [:filename] => [:environment] do |t, args|

    require 'csv'
    Dir.chdir(Rails.root + 'lib/assets/sfmta_gtfs')
    CSV.foreach(args[:filename], :headers => true) do |row|
      Station.create!({
        :id           => row[0],
        :name         => row[1],
        :lat          => row[2],
        :long         => row[3],
        :dockcount    => row[4],
        :landmark     => row[5],
        :installation => DateTime.strptime(row[6], "%m/%d/%Y").strftime("%Y/%m/%d"),
        :notes        => row[7]
        })
      # puts row.to_hash
    end
  end

  task init_routes: :environment do
    Bikeroute.delete_all
    require 'json'
    Dir.chdir(Rails.root + 'lib/assets')
    file = File.read('routeSeedData.json')
    data_hash = JSON.parse(file)
    data_hash.each do |record|
      hoods = record["geojson"]["properties"]["hoods"]
      record["geojson"] = record["geojson"].to_json
      record["elevation"] = record["elevation"].to_json
      new_record = Bikeroute.new(record)
      hoods.each do |hood|
        new_record.neighborhoods << Neighborhood.find_by( name: hood)
      end
      new_record.save
    end
  end

  task init_hoods: :environment do
    Neighborhood.delete_all
    require 'json'
    Dir.chdir(Rails.root + 'lib/assets')
    file = File.read('hoodSeedData.json')
    data_hash = JSON.parse(file)
    data_hash.each do |record|
      record["geojson"] = record["geojson"].to_json
      new_record = Neighborhood.new(record)
      new_record.save
    end
  end

end
#http://stackoverflow.com/questions/4410794/ruby-on-rails-import-data-from-a-csv-file
#command: rake data:load_stations[201402_station_data.csv]
