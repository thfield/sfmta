class WelcomeController < ApplicationController
  def index

  end

  def data
    #zeroday is probably the day you seeded your DB
    zeroday = DateTime.parse('2015-11-29')

    @whichRoute = 10885
    @whatHour = 4

    # @myRoute = Route.where(id: @whichRoute)[0]
    allStops = StopTime.includes({trip: :route}, :stop).where( arrival_time: (zeroday.change( { hour: @whatHour } )..zeroday.change( { hour: @whatHour + 1 } )) )
    myRoutesTrips = Array.new
    Trip.includes(:route).where(route_id: @whichRoute).each do |trip|
      myRoutesTrips.push(trip.id)
    end
    stopsOnMyRoute = allStops.where(trip_id: myRoutesTrips)

    myStops = stopsOnMyRoute.uniq.pluck(:stop_id)
    @data = Array.new

    myStops.each do |stop|
      temp = Hash.new
      foo = Stop.where(id: stop)[0]
      temp['num'] = stopsOnMyRoute.where(stop_id: stop).length
      temp['lon'] = foo.stop_lon.to_f
      temp['lat'] = foo.stop_lat.to_f
      @data.push(temp)
    end

    # this takes >6 seconds )-:
    # use eager loading?  http://guides.rubyonrails.org/active_record_querying.html#eager-loading-associations

    render json: @data
  end
end
