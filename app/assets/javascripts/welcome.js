//= require d3/d3.min
//= require topojson/topojson
//= require tile/index

var busrouteNames = [ [1002, '2 Clement'], [1003, '3 Jackson'], [1005, '5 Fulton'], [1010, '10 Townsend'], [1012, '12 Folsom/Pacific'], [1028, '28 19th Avenue'], [1030, '30 Stockton'], [1031, '31AX Balboa A Express'], [1032, '31BX Balboa B Express'], [1033, '1AX California A Express'], [1034, '1BX California B Express'], [1038, '38AX Geary A Express'], [1039, '38BX Geary B Express'], [1045, '45 Stockton - Union'], [1055, '5R Fulton Rapid'], [1059, 'Powell-Mason '], [1060, 'Powell-Hyde '], [1071, '7 Haight - Noriega'], [1072, '7R Noriega Rapid'], [1081, '81X Caltrain Express'], [1082, '82X Levi Plaza Express'], [1093, 'N Judah'], [1094, 'J Church'], [1102, 'K-Owl'], [1103, 'L-Owl'], [1104, 'M-Owl'], [1105, 'N-Owl'], [1106, 'T-Owl'], [1108, '8AX Bayshore A Express'], [1109, '8BX Bayshore B Express'], [1110, '8 Bayshore'], [1196, 'KT Ingleside/Third'], [1197, 'S Castro Shuttle'], [1198, 'L Taraval'], [1199, 'M Ocean View'], [1900, '9 San Bruno'], [1901, '9R San Bruno Rapid'], [10867, '1 California'], [10874, '7X Noriega Express'], [10879, '14 Mission'], [10880, '14R Mission Rapid'], [10881, '14X Mission Express'], [10882, '18 46th Avenue'], [10883, '19 Polk'], [10884, '21 Hayes'], [10885, '22 Fillmore'], [10886, '23 Monterey'], [10887, '24 Divisadero'], [10888, '25 Treasure Island'], [10889, '27 Bryant'], [10891, '29 Sunset'], [10893, '30X Marina Express'], [10894, '31 Balboa'], [10895, '33 Ashbury-18th'], [10896, '35 Eureka'], [10897, '36 Teresita'], [10898, '37 Corbett'], [10899, '38 Geary'], [10900, '38R Geary Rapid'], [10901, '39 Coit Tower'], [10902, '41 Union'], [10903, '43 Masonic'], [10904, '44 OShaughnessy'], [10906, '47 Van Ness'], [10907, '48 24th Street'], [10908, '49 Van Ness-Mission'], [10909, '52 Excelsior'], [10910, '54 Felton'], [10911, '55 16th Street'], [10912, '56 Rutland'], [10913, '57 Parkmerced'], [10916, 'California '], [10917, '66 Quintara'], [10918, '67 Bernal Heights'], [10919, '76X Marin Headlands Express'], [10921, '83X Mid Market Express'], [10922, '88 Bart Shuttle'], [10923, '90 San Bruno Owl'], [10924, '91 3Rd-19th Ave Owl'], [10928, 'F Market & Wharves'], [10938, 'NX N Express'], [10974, '6 Parnassus'], [10986, '28R 19th Avenue Rapid'], [11029, 'E Embarcadero'], [11030, 'Muni Metro Bus Shuttle'] ];

function addOption(el,i, arr){
  var option = document.createElement("option");
  option.value = el[0];
  option.text = el[1];
  if (el[0] == 10885)
    option.selected = true;
  this.appendChild(option);
}

var targetRouteLine = 10885,
    hour = 12;

$(document).ready(function() {
  var routeChooser = document.getElementById('routeChooser');
  busrouteNames.forEach(addOption, routeChooser);

  var margin = {top: 10, left: 10, bottom: 10, right: 10},
      width = parseInt(d3.select('#map_container').style('width')),
      width = width - margin.left - margin.right,
      mapRatio = 1,
      height = width * mapRatio,
      scaleMultiplier = 300;

  var svg = d3.select("#map_container").append("svg")
      .attr("height", height)
      .attr("id","neighborhood-map");

  var tiler = d3.geo.tile()
      .size([width, height]);

  var projection = d3.geo.mercator()
      .center([-122.433701, 37.767683])
      .scale(width*scaleMultiplier)
      .translate([width / 2, height / 2]);

  var path = d3.geo.path()
      .projection(projection);

  svg.call(renderTiles, "highroad")
     .call(renderStops, targetRouteLine, hour)
     .call(renderRouteline, targetRouteLine, hour);

  d3.select(window).on('resize', resize);

  // $('#routeChooser').change(function () {
  $('#draw').on('click', function () {
      $('.bus_route').remove();
      $('.bus_stop').remove();
      svg.call(renderRouteline, $('#routeChooser').val(), $('#startHour').val())
         .call(renderStops, $('#routeChooser').val(), $('#startHour').val());
    });

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

    //bus_stop resize not working, look into transform
    svg.selectAll('.bus_stop').attr('d', path);
    svg.selectAll('.bus_route').attr('d', path);
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
    });
    logit(routeNum, hour);
  }

  function renderRouteline(_, routeNum, hour){
    d3.json('busroute/'+ routeNum + '?time=' + hour, function(data) {
      _.append('path')
        .datum(data)
        .attr('d', path)
        .attr('class', 'bus_route')
    });
  }

  // for help with development
  function logit(routeNum, hour){
    // console.log('route: ' + routeNum + ' hr: ' + hour);
    console.log('busstops/'+ routeNum + '?time=' + hour);
  }

});
