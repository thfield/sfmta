# SFMTA Visualization
##Huh?
This is a way to visualize the frequency of service to bus stops around the city:

![animated gif of 41 Union Bus](/public/img/41Union.gif)

The red circles (bus stops) are sized by how many times a bus from a route services that stop during a certain hour.  Eventually, I'd like to have the route lines be thicker/thinner based on how frequent service is.



##Setup
To get this running on your machine:
* clone this repo
* setup your db: `rake db:setup`
* seed your database:
  1. `rake data:init_routes`
  2. `rake data:init_fares`
  3. `rake data:init_fare_route`
  4.  `rake data:init_services`
  5.  `rake data:init_shapes`
  6.  `rake data:init_stop_times`
  7.  `rake data:init_stops`
  8.  `rake data:init_trips`
* start your server `rails s`
* navigate to [localhost:3000/](http://localhost:3000/)
