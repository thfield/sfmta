//= require d3/d3.min
//= require tile/index
//= require d3-legend/d3-legend.min

var routelineData = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"route":"1094","time":2,"freq":1},"geometry":{"type":"LineString","coordinates":[[-122.446211,37.721247],[-122.446096,37.721407],[-122.446016,37.721452],[-122.445856,37.72163],[-122.444951,37.722701],[-122.444756,37.722969],[-122.443072,37.724994],[-122.442396,37.725797],[-122.441583,37.726761],[-122.441446,37.726939],[-122.441114,37.727448],[-122.44077,37.727956],[-122.440609,37.728188],[-122.440449,37.728438],[-122.440163,37.728858],[-122.440071,37.728929],[-122.439556,37.729241],[-122.438983,37.729589],[-122.438857,37.729669],[-122.438467,37.729919],[-122.438158,37.730133],[-122.438009,37.730187],[-122.437837,37.730231],[-122.437494,37.730258],[-122.436543,37.730454],[-122.436142,37.730535],[-122.435821,37.730651],[-122.435649,37.730776],[-122.435558,37.730847],[-122.435409,37.731088],[-122.435271,37.731347],[-122.435145,37.731534],[-122.434882,37.73181],[-122.434492,37.732042],[-122.431284,37.733568],[-122.428535,37.734995],[-122.427802,37.735468],[-122.426564,37.736387],[-122.425521,37.737261],[-122.425029,37.73776],[-122.424799,37.738099],[-122.424605,37.738429],[-122.424375,37.738983],[-122.424215,37.739652],[-122.424157,37.739875],[-122.4241,37.740062],[-122.423848,37.740651],[-122.423527,37.741695],[-122.423366,37.742114],[-122.423286,37.742302],[-122.424237,37.742239],[-122.425818,37.742142],[-122.426528,37.742097],[-122.426597,37.7429],[-122.426677,37.743703],[-122.426757,37.744497],[-122.426825,37.7453],[-122.426894,37.746103],[-122.426939,37.746505],[-122.426974,37.746897],[-122.427053,37.747701],[-122.427133,37.748495],[-122.427202,37.749298],[-122.427282,37.750101],[-122.427362,37.750895],[-122.427442,37.751707],[-122.42751,37.752456],[-122.42759,37.753295],[-122.427739,37.754901],[-122.427659,37.754964],[-122.427567,37.755044],[-122.427464,37.755142],[-122.427326,37.755312],[-122.427292,37.755401],[-122.42728,37.755481],[-122.427326,37.755892],[-122.427303,37.755963],[-122.42728,37.756034],[-122.427211,37.756124],[-122.427062,37.756231],[-122.426971,37.756338],[-122.426913,37.756427],[-122.426879,37.756561],[-122.426925,37.757051],[-122.426959,37.757355],[-122.426959,37.757462],[-122.42697,37.757498],[-122.427005,37.75756],[-122.427062,37.757605],[-122.427131,37.757658],[-122.427188,37.757676],[-122.427257,37.757685],[-122.42744,37.757694],[-122.427555,37.757712],[-122.427646,37.75773],[-122.427715,37.757756],[-122.427761,37.757792],[-122.427795,37.757837],[-122.427818,37.757872],[-122.427841,37.757926],[-122.427853,37.757997],[-122.427864,37.758104],[-122.427898,37.758934],[-122.427955,37.759434],[-122.427967,37.759603],[-122.427978,37.759711],[-122.428035,37.760317],[-122.428058,37.760621],[-122.428093,37.760754],[-122.428207,37.761102],[-122.428356,37.76129],[-122.428436,37.762093],[-122.428516,37.762896],[-122.428585,37.763583],[-122.428676,37.764511],[-122.428825,37.766135],[-122.42895,37.767509],[-122.428973,37.767732],[-122.429065,37.768678],[-122.429133,37.769463]]}}]};
var busrouteNames={10867:"1 California",1033:"1AX California A Express",1034:"1BX California B Express",1002:"2 Clement",1003:"3 Jackson",1005:"5 Fulton",1055:"5R Fulton Rapid",10974:"6 Parnassus",1071:"7 Haight - Noriega",1072:"7R Noriega Rapid",10874:"7X Noriega Express",1110:"8 Bayshore",1108:"8AX Bayshore A Express",1109:"8BX Bayshore B Express",1900:"9 San Bruno",1901:"9R San Bruno Rapid",1010:"10 Townsend",1012:"12 Folsom/Pacific",10879:"14 Mission",10880:"14R Mission Rapid",10881:"14X Mission Express",10882:"18 46th Avenue",10883:"19 Polk",10884:"21 Hayes",10885:"22 Fillmore",10886:"23 Monterey",10887:"24 Divisadero",10888:"25 Treasure Island",10889:"27 Bryant",1028:"28 19th Avenue",10986:"28R 19th Avenue Rapid",10891:"29 Sunset",1030:"30 Stockton",10893:"30X Marina Express",10894:"31 Balboa",1031:"31AX Balboa A Express",1032:"31BX Balboa B Express",10895:"33 Ashbury-18th",10896:"35 Eureka",10897:"36 Teresita",10898:"37 Corbett",10899:"38 Geary",1038:"38AX Geary A Express",1039:"38BX Geary B Express",10900:"38R Geary Rapid",10901:"39 Coit Tower",10902:"41 Union",10903:"43 Masonic",10904:"44 OShaughnessy",1045:"45 Stockton - Union",10906:"47 Van Ness",10907:"48 24th Street",10908:"49 Van Ness-Mission",10909:"52 Excelsior",10910:"54 Felton",10911:"55 16th Street",10912:"56 Rutland",10913:"57 Parkmerced",10917:"66 Quintara",10918:"67 Bernal Heights",10919:"76X Marin Headlands Express",1081:"81X Caltrain Express",1082:"82X Levi Plaza Express",10921:"83X Mid Market Express",10922:"88 Bart Shuttle",10923:"90 San Bruno Owl",10924:"91 3Rd-19th Ave Owl",11029:"E Embarcadero",10928:"F Market & Wharves",1094:"J Church",1196:"KT Ingleside/Third",1198:"L Taraval",1199:"M Ocean View",1093:"N Judah",10938:"NX N Express",1197:"S Castro Shuttle",1102:"K-Owl",1103:"L-Owl",1104:"M-Owl",1105:"N-Owl",1106:"T-Owl",11030:"Muni Metro Bus Shuttle",1060:"Powell-Hyde",1059:"Powell-Mason",10916:"California"};

function addOption(el,i, arr){
  var option = document.createElement("option");
  option.value = el[0];
  option.text = el[1];
  if (el[0] == 10885)
    option.selected = true;
  this.appendChild(option);
}

$(document).ready(function() {
  var container = d3.select("#map_container");

  var width = parseInt(container.style('width')),
      mapRatio = 1,
      height = width * mapRatio,
      prefix = prefixMatch(["webkit", "ms", "Moz", "O"]);

  var tile = d3.geo.tile()
      .size([width, height]);

  var projection = d3.geo.mercator()
      .scale((1 << 21) / 2 / Math.PI)
      .translate([-width / 2, -height / 2]); // just temporary

  var tileProjection = d3.geo.mercator();

  var tilePath = d3.geo.path()
      .projection(tileProjection);

  var zoom = d3.behavior.zoom()
      .scale(projection.scale() * 2 * Math.PI)
      .scaleExtent([1 << 21, 1 << 25])
      .translate(projection([-122.433701, 37.767683]).map(function(x) { return -x; }))
      .on("zoom", zoomed);

  var map = container.append("div")
      .attr("class", "map")
      .style("width", width + "px")
      .style("height", height + "px")
      .call(zoom);

  var routePath = d3.geo.path()
      .projection(projection);

  var layer = map.append("div")
        .attr("class", "layer");

  var routeSvg = map.append('svg')
        .attr("class", "route")
        .style("width", width + "px")
        .style("height", height + "px");

  zoomed();

  $('#draw').on('click', function () {
      $('.bus_route').remove();
      d3.json('precompiled/routes' +  $('#startHour').val() +'oclock.json', function(data){
        routeSvg.call(renderRouteline, data);
        routelineData = data;
      })
  });

  function zoomed() {
    var tiles = tile
        .scale(zoom.scale())
        .translate(zoom.translate())
        ();

    projection
        .scale(zoom.scale() / 2 / Math.PI)
        .translate(zoom.translate());

    var image = layer
        .style(prefix + "transform", matrix3d(tiles.scale, tiles.translate))
      .selectAll(".tile")
        .data(tiles, function(d) { return d; });

    image.exit()
        .each(function(d) { this._xhr.abort(); })
        .remove();

    image.enter().append("svg")
        .attr("class", "tile")
        .style("left", function(d) { return d[0] * 256 + "px"; })
        .style("top", function(d) { return d[1] * 256 + "px"; })
        .each(function(d) {
          var svg = d3.select(this);        // vectiles- ['highroad','water-areas','skeletron']
          this._xhr = d3.json("http://" + ["a", "b", "c"][(d[0] * 31 + d[1]) % 3] + ".tile.openstreetmap.us/vectiles-highroad/" + d[2] + "/" + d[0] + "/" + d[1] + ".json", function(error, json) {
            var k = Math.pow(2, d[2]) * 256; // size of the world in pixels

            tilePath.projection()
                .translate([k / 2 - d[0] * 256, k / 2 - d[1] * 256]) // [0°,0°] in pixels
                .scale(k / 2 / Math.PI);

            svg.selectAll("path")
                .data(json.features.sort(function(a, b) { return a.properties.sort_key - b.properties.sort_key; }))
              .enter().append("path")
                .attr("class", function(d) { return d.properties.kind; })
                .attr("d", tilePath);
          });
        });

    ttHide();
    d3.selectAll('.bus_route').remove();
    routeSvg.call(renderRouteline, routelineData);
  }

  function matrix3d(scale, translate) {
    var k = scale / 256, r = scale % 1 ? Number : Math.round;
    return "matrix3d(" + [k, 0, 0, 0, 0, k, 0, 0, 0, 0, k, 0, r(translate[0] * scale), r(translate[1] * scale), 0, 1 ] + ")";
  }

  function prefixMatch(p) {
    var i = -1, n = p.length, s = document.body.style;
    while (++i < n) if (p[i] + "Transform" in s) return "-" + p[i].toLowerCase() + "-";
    return "";
  }

  function renderRouteline(_, data){
    data.features.forEach(function(feature){
      _.append('path')
        .datum(feature)
        .attr('d', routePath)
        .attr('class', function(d){ return 'bus_route route-' + d.properties.route + ' freq-' + d.properties.freq})
        .on('mouseover', function(d) {
            var el = d3.select(this)
            ttFollow(el,busrouteNames[d.properties.route]);
          })
          .on('mouseout', function(){ ttHide(); });
    })
  }

  function ttFollow(element, caption, options) {
    element.on('mousemove', null);
    element.on('mousemove', function() {
      var position = d3.mouse(document.body);
      d3.select('#tooltip')
        .style('top', ( (position[1] + 30)) + "px")
        .style('left', ( position[0]) + "px");
      d3.select('#tooltip .value')
        .text(caption);
    });
    d3.select('#tooltip').classed('hidden', false);
  };

  function ttHide() {
    d3.select('#tooltip').classed('hidden', true);
  }

  var legendSvg = d3.select("#legend_container")
        .append("svg")
          .attr("class","legend")
          .style("width",width);

  function busLegend(){
    var busType = d3.scale.ordinal()
        .domain(['MuniMetro','Express','Rapid','Bus','Cable Car','Historic Streetcar'])
        .range(['#c4074e','#005595','#0080c1','#569bbe','#e7a614','#6f0000']);

    legendSvg.append("g")
      .attr("class", "busLegend")
      .attr("transform", "translate(20,20)");

    var busLegend = d3.legend.color()
      .shape('rect')
      .shapePadding(5)
      .scale(busType);

    legendSvg.select(".busLegend")
      .call(busLegend);
  }

  function freqLegend(){
    var busFrequency = d3.scale.ordinal()
        .domain([1,2,3,4,5,6])
        .range(['freq-2','freq-3','freq-4','freq-5','freq-6','freq-7']);

    var line = 'M 0 0 l 20 0';

    legendSvg.append("g")
      .attr("class", "frequencyLegend")
      .attr("transform", "translate(200,20)");

    var frequencyLegend = d3.legend.color()
      .shape('path', line)
      .shapePadding(15)
      // .orient('horizontal')
      .useClass(true)
      .labels(['1-2','3','4','5','6','7-14'])
      .labelOffset(15)
      .scale(busFrequency)
      .title('Busses each Hour');

    legendSvg.select(".frequencyLegend")
      .call(frequencyLegend);
  }
  busLegend();
  freqLegend();

})
