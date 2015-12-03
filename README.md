# SFMTA Visualization
##Huh?
Check out a [live version](https://thfield.github.io/sfmta) here that runs on a pre-computed dataset.

This is a way to visualize the frequency of service to bus stops around the city:

![animated gif of 41 Union Bus](/public/img/41Union.gif)

The red circles (bus stops) are sized by how many times a bus from a route services that stop during a certain hour.  Eventually, I'd like to have the route lines be thicker/thinner based on how frequent service is.



##Setup
To get this running on your machine:
* [get rails](http://rubyonrails.org/download/)
* clone this repo
* setup your db: `rake db:setup`
* seed your database: `rake data:init_all`
* wait a few minutes...
* start your server `rails s`
* navigate to [localhost:3000/](http://localhost:3000/)
* ...
* profit!
