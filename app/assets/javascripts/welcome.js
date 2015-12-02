//= require d3/d3
//= require topojson/topojson

var targetRouteLine = 10885,
    hour =12;

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
  svg.call(renderStops, targetRouteLine, hour);
  svg.call(renderRouteline, targetRouteLine, hour);

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
    svg.selectAll('.bus_route').attr('d', path);

    //bus_stop resize not working, look into transform
    svg.selectAll('.bus_stop').attr('d', path);
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

  function renderStops(_, routeNum, hour){
    d3.json('busstops/'+ routeNum + '?time=' + hour, function(data){
      _.selectAll('bus_stop')
          .data(data)
        .enter().append('circle').attr('class', 'bus_stop')
          .attr('r', function(d) { return Math.sqrt(d.num*2) })
          .attr('transform', function(d) { return 'translate(' + projection([d.lon,d.lat]) + ')'; });
    })
  }

  function renderRouteline(_, routeNum, hour){
    d3.json('busroute/'+ routeNum + '?time=' + hour, function(data) {
      _.append('path')
        .datum(data)
        .attr('d', path)
        .attr('class', 'bus_route')
    });

  }


});
