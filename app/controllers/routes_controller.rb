class RoutesController < ApplicationController
  before_action :set_route, only: [:busline, :busstops]

  def busline
    zeroday = DateTime.parse('2015-11-29')

    @whichRoute = params[:id]
    @whatHour = params[:time].to_i

    allStops = StopTime.includes({trip: :route}, :stop).where( arrival_time: (zeroday.change( { hour: @whatHour } )..zeroday.change( { hour: @whatHour + 1 } )) )
    myRoutesTrips = Array.new
    Trip.where(route_id: @whichRoute).each do |trip|
      myRoutesTrips.push(trip.id)
    end
    stopsOnMyRoute = allStops.where(trip_id: myRoutesTrips)

    shapesFromMyRoute = Trip.includes(:shapes).where(id: stopsOnMyRoute.first.trip_id)[0].shapes
    coordinates = Array.new
    shapesFromMyRoute.each do |shape|
      temp = [shape.shape_pt_lon.to_f,shape.shape_pt_lat.to_f]
      coordinates.push(temp)
    end

    @returndata = {
      'type'=>'Feature',
      'properties' => {},
      'geometry' => {'type' => 'LineString',
                     'coordinates' => coordinates
                    }
    }
    render json: @returndata
    # render html: @whatHour
  end

  def busstops
    #zeroday is probably the day you seeded your DB
    zeroday = DateTime.parse('2015-11-29')

    @whichRoute = params[:id]
    @whatHour = params[:time].to_i

    # @myRoute = Route.where(id: @whichRoute)[0]
    allStops = StopTime.includes({trip: :route}, :stop).where( arrival_time: (zeroday.change( { hour: @whatHour } )..zeroday.change( { hour: @whatHour + 1 } )) )
    myRoutesTrips = Array.new
    Trip.where(route_id: @whichRoute).each do |trip|
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

    render json: @data
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_route
      # @route = Route.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def route_params
      params[:route].permit(:time)
    end
end
