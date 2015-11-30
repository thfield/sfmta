// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
//= require d3/d3
//= require topojson/topojson

var geodata = [{"num":4,"lon":-122.407646,"lat":37.765701},{"num":4,"lon":-122.405515,"lat":37.765861},{"num":4,"lon":-122.403617,"lat":37.76482},{"num":4,"lon":-122.401711,"lat":37.764771},{"num":4,"lon":-122.397785,"lat":37.764749},{"num":3,"lon":-122.397569,"lat":37.762614},{"num":1,"lon":-122.39516,"lat":37.762621},{"num":1,"lon":-122.39322,"lat":37.762732},{"num":1,"lon":-122.390848,"lat":37.762874},{"num":1,"lon":-122.388925,"lat":37.762992},{"num":2,"lon":-122.388753,"lat":37.760545},{"num":1,"lon":-122.389664,"lat":37.7629},{"num":1,"lon":-122.393471,"lat":37.762828},{"num":1,"lon":-122.395422,"lat":37.762701},{"num":1,"lon":-122.397352,"lat":37.76258},{"num":1,"lon":-122.397661,"lat":37.76498},{"num":1,"lon":-122.401451,"lat":37.764904},{"num":1,"lon":-122.403476,"lat":37.764817},{"num":1,"lon":-122.40469,"lat":37.766039}];


$(document).ready(function() {

  var margin = {top: 10, left: 10, bottom: 10, right: 10}
      , width = parseInt(d3.select('#map_container').style('width'))
      , width = width - margin.left - margin.right
      , mapRatio = 1
      , height = width * mapRatio
      , scaleMultiplier = 300
      ;

  var svg = d3.select("#map_container").append("svg")
      .attr("height", height)
      .attr("id","neighborhood-map")
      ;

  var tiler = d3.geo.tile()
      .size([width, height]);

  var projection = d3.geo.mercator()
      .center([-122.433701, 37.767683])
      .scale(width*scaleMultiplier)
      .translate([width / 2, height / 2]);

  var path = d3.geo.path()
      .projection(projection);

  svg.call(renderTiles, "highroad");
  svg.call(renderStops);

  d3.select(window).on('resize', resize);

  function resize() {
    // adjust things when the window size changes
    width = parseInt(d3.select('#map_container').style('width'));
    width = width - margin.left - margin.right;
    height = width * mapRatio;

    // update projection
    projection
        .translate([width / 2, height / 2])
        .scale(width*scaleMultiplier);

    // resize the map container
    svg
        .style('width', width + 'px')
        .style('height', height + 'px');

    // resize the map
    svg.select('.highroad').attr('d', path);
    svg.selectAll('.minor_road').attr('d', path);
    svg.selectAll('.major_road').attr('d', path);
    svg.selectAll('.highway').attr('d', path);
  }

  function renderTiles(svg, type) {
    svg.append("g")
        .attr("class", type)
      .selectAll("g")
        .data(tiler
          .scale(projection.scale() * 2 * Math.PI)
          .translate(projection([0, 0])))
      .enter().append("g")
        .each(function(d) {
          var g = d3.select(this);
          d3.json("http://" + ["a", "b", "c"][(d[0] * 31 + d[1]) % 3] + ".tile.openstreetmap.us/vectiles-" + type + "/" + d[2] + "/" + d[0] + "/" + d[1] + ".json", function(error, json) {
            g.selectAll("path")
                .data(json.features.sort(function(a, b) { return a.properties.sort_key - b.properties.sort_key; }))
              .enter().append("path")
                .attr("class", function(d) { return d.properties.kind; })
                .attr("d", path);
          });
        });
  }

  function renderStops(){
    d3.json('data/', function(data){
      svg.selectAll('bus_stop')
          .data(data)
        .enter().append('circle').attr('class', 'bus_stop')
          .attr('r', function(d) { return d.num*2 })
          .attr('transform', function(d) { return 'translate(' + projection([d.lon,d.lat]) + ')'; });
    })

  }


});
