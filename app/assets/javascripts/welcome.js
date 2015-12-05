//= require d3/d3.min
//= require tile/index
var routelineData = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"route":"10885","time":12},"geometry":{"type":"LineString","coordinates":[[-122.436566,37.802486],[-122.436693,37.802628],[-122.436892,37.803603],[-122.437045,37.804359],[-122.437272,37.80547],[-122.437433,37.806262],[-122.437459,37.806386],[-122.437459,37.806394],[-122.437471,37.806403],[-122.437482,37.806403],[-122.437482,37.806394],[-122.437471,37.806386],[-122.437433,37.806262],[-122.437272,37.80547],[-122.437045,37.804359],[-122.436892,37.803603],[-122.436693,37.802628],[-122.436274,37.800814],[-122.436225,37.800722],[-122.436046,37.799843],[-122.435961,37.799419],[-122.435866,37.798952],[-122.435772,37.798487],[-122.435678,37.798021],[-122.43549,37.797089],[-122.437138,37.796879],[-122.43695,37.795949],[-122.436761,37.795016],[-122.436567,37.794058],[-122.434919,37.794266],[-122.434734,37.793347],[-122.434558,37.792472],[-122.43438,37.791592],[-122.434203,37.790711],[-122.434027,37.789837],[-122.43384,37.788906],[-122.433647,37.78795],[-122.433553,37.787484],[-122.43346,37.787021],[-122.433272,37.786085],[-122.433083,37.785151],[-122.432914,37.784355],[-122.432706,37.783293],[-122.432516,37.78235],[-122.432329,37.781428],[-122.43214,37.780496],[-122.431952,37.779564],[-122.431763,37.778632],[-122.431389,37.776753],[-122.431206,37.775825],[-122.431011,37.774897],[-122.430828,37.773969],[-122.430634,37.773032],[-122.430439,37.772104],[-122.430359,37.771631],[-122.430267,37.771167],[-122.430176,37.770703],[-122.430084,37.770248],[-122.429225,37.770346],[-122.429156,37.769561],[-122.429133,37.769463],[-122.429065,37.768678],[-122.428973,37.767732],[-122.42895,37.767509],[-122.428825,37.766135],[-122.428676,37.764511],[-122.427564,37.764573],[-122.426384,37.764653],[-122.424585,37.76476],[-122.424103,37.764787],[-122.423118,37.764849],[-122.422854,37.764858],[-122.421892,37.76492],[-122.421387,37.764947],[-122.42125,37.764956],[-122.420906,37.764982],[-122.420585,37.765],[-122.420493,37.765009],[-122.41968,37.765053],[-122.418706,37.765116],[-122.41858,37.765116],[-122.417491,37.765187],[-122.416391,37.765249],[-122.415313,37.76532],[-122.413113,37.765453],[-122.412425,37.765489],[-122.411463,37.765551],[-122.410489,37.765613],[-122.408552,37.765728],[-122.407543,37.765782],[-122.406558,37.765844],[-122.405595,37.765906],[-122.404632,37.765959],[-122.403647,37.766021],[-122.403533,37.764727],[-122.40257,37.764781],[-122.401608,37.764843],[-122.400633,37.764896],[-122.399671,37.764958],[-122.398708,37.76502],[-122.397745,37.765073],[-122.39762,37.763797],[-122.397495,37.762521],[-122.396532,37.762583],[-122.39557,37.762645],[-122.394596,37.762698],[-122.393622,37.76276],[-122.392991,37.762796],[-122.39235,37.762831],[-122.390699,37.762929],[-122.389737,37.762991],[-122.38874,37.763053],[-122.388695,37.761768],[-122.388558,37.760492],[-122.388719,37.760501]]}},{"type":"Feature","properties":{"route":"10885","time":12},"geometry":{"type":"LineString","coordinates":[[-122.388753,37.760501],[-122.389487,37.760439],[-122.389612,37.761715],[-122.389737,37.762991],[-122.390699,37.762929],[-122.39235,37.762831],[-122.392991,37.762796],[-122.393622,37.76276],[-122.394596,37.762698],[-122.39557,37.762645],[-122.396532,37.762583],[-122.397495,37.762521],[-122.39762,37.763797],[-122.397745,37.765073],[-122.398708,37.76502],[-122.399671,37.764958],[-122.400633,37.764896],[-122.401608,37.764843],[-122.40257,37.764781],[-122.403533,37.764727],[-122.403647,37.766021],[-122.404632,37.765959],[-122.405595,37.765906],[-122.406558,37.765844],[-122.407543,37.765782],[-122.408552,37.765728],[-122.410489,37.765613],[-122.411463,37.765551],[-122.412425,37.765489],[-122.413113,37.765453],[-122.415313,37.76532],[-122.416391,37.765249],[-122.417491,37.765187],[-122.41858,37.765116],[-122.418706,37.765116],[-122.41968,37.765053],[-122.420493,37.765009],[-122.420585,37.765],[-122.420906,37.764982],[-122.42125,37.764956],[-122.421387,37.764947],[-122.421892,37.76492],[-122.422854,37.764858],[-122.423118,37.764849],[-122.424103,37.764787],[-122.424585,37.76476],[-122.426384,37.764653],[-122.427564,37.764573],[-122.428676,37.764511],[-122.428825,37.766135],[-122.42895,37.767509],[-122.428973,37.767732],[-122.429065,37.768678],[-122.429133,37.769463],[-122.429156,37.769561],[-122.429225,37.770346],[-122.430084,37.770248],[-122.430176,37.770703],[-122.430267,37.771167],[-122.430359,37.771631],[-122.430439,37.772104],[-122.430634,37.773032],[-122.430828,37.773969],[-122.431011,37.774897],[-122.431206,37.775825],[-122.431389,37.776753],[-122.431584,37.77769],[-122.431767,37.778627],[-122.431962,37.779555],[-122.432145,37.780492],[-122.432339,37.78142],[-122.432523,37.782348],[-122.432706,37.783285],[-122.432923,37.784346],[-122.433084,37.785141],[-122.433278,37.786077],[-122.433462,37.787014],[-122.433553,37.787478],[-122.433656,37.787942],[-122.43384,37.788897],[-122.434034,37.789834],[-122.434206,37.790708],[-122.434389,37.791583],[-122.434561,37.792466],[-122.434744,37.793341],[-122.434928,37.79426],[-122.436567,37.794055],[-122.43714,37.796874],[-122.4355,37.797079],[-122.435684,37.798016],[-122.435775,37.79848],[-122.435867,37.798944],[-122.43597,37.799417],[-122.43605,37.799836],[-122.436234,37.80072],[-122.436279,37.800809],[-122.436703,37.80262]]}}]};
var stopsData = [{"num":7,"lon":-122.407669,"lat":37.765862},{"num":7,"lon":-122.39322,"lat":37.762732},{"num":7,"lon":-122.437389,"lat":37.805421},{"num":7,"lon":-122.421746,"lat":37.764987},{"num":8,"lon":-122.431207,"lat":37.775598},{"num":8,"lon":-122.436789,"lat":37.794887},{"num":7,"lon":-122.434556,"lat":37.792761},{"num":7,"lon":-122.426579,"lat":37.764575},{"num":8,"lon":-122.389664,"lat":37.7629},{"num":7,"lon":-122.437127,"lat":37.804423},{"num":7,"lon":-122.43291,"lat":37.783984},{"num":7,"lon":-122.436229,"lat":37.801091},{"num":7,"lon":-122.390848,"lat":37.762874},{"num":7,"lon":-122.432329,"lat":37.781733},{"num":7,"lon":-122.410328,"lat":37.765568},{"num":7,"lon":-122.430347,"lat":37.772033},{"num":7,"lon":-122.436278,"lat":37.794056},{"num":7,"lon":-122.436806,"lat":37.802817},{"num":7,"lon":-122.434842,"lat":37.794158},{"num":7,"lon":-122.423959,"lat":37.764853},{"num":7,"lon":-122.432699,"lat":37.783019},{"num":7,"lon":-122.388925,"lat":37.762992},{"num":7,"lon":-122.424256,"lat":37.76472},{"num":7,"lon":-122.430866,"lat":37.773759},{"num":7,"lon":-122.393471,"lat":37.762828},{"num":7,"lon":-122.436469,"lat":37.800891},{"num":14,"lon":-122.436517,"lat":37.8024},{"num":7,"lon":-122.436442,"lat":37.794131},{"num":7,"lon":-122.409812,"lat":37.76572},{"num":7,"lon":-122.434878,"lat":37.793805},{"num":7,"lon":-122.432627,"lat":37.783193},{"num":7,"lon":-122.426156,"lat":37.764731},{"num":7,"lon":-122.436669,"lat":37.794911},{"num":7,"lon":-122.395422,"lat":37.762701},{"num":7,"lon":-122.430825,"lat":37.774268},{"num":7,"lon":-122.422056,"lat":37.764849},{"num":14,"lon":-122.388753,"lat":37.760545},{"num":7,"lon":-122.407646,"lat":37.765701},{"num":7,"lon":-122.430537,"lat":37.772199},{"num":7,"lon":-122.432401,"lat":37.781523},{"num":7,"lon":-122.434607,"lat":37.792386},{"num":7,"lon":-122.436863,"lat":37.795859},{"num":7,"lon":-122.436051,"lat":37.799595},{"num":7,"lon":-122.397352,"lat":37.76258},{"num":7,"lon":-122.412976,"lat":37.765523},{"num":7,"lon":-122.432921,"lat":37.784733},{"num":7,"lon":-122.428523,"lat":37.764579},{"num":7,"lon":-122.419835,"lat":37.764983},{"num":7,"lon":-122.405515,"lat":37.765861},{"num":7,"lon":-122.431197,"lat":37.776106},{"num":7,"lon":-122.432138,"lat":37.780204},{"num":7,"lon":-122.397661,"lat":37.76498},{"num":7,"lon":-122.429701,"lat":37.770248},{"num":7,"lon":-122.431369,"lat":37.776998},{"num":7,"lon":-122.415428,"lat":37.7654},{"num":7,"lon":-122.4341,"lat":37.789925},{"num":7,"lon":-122.403617,"lat":37.76482},{"num":7,"lon":-122.437054,"lat":37.796785},{"num":7,"lon":-122.433191,"lat":37.785994},{"num":7,"lon":-122.401451,"lat":37.764904},{"num":7,"lon":-122.429167,"lat":37.769499},{"num":7,"lon":-122.435661,"lat":37.797124},{"num":7,"lon":-122.401711,"lat":37.764771},{"num":7,"lon":-122.416048,"lat":37.765218},{"num":7,"lon":-122.431762,"lat":37.778343},{"num":7,"lon":-122.431687,"lat":37.77854},{"num":7,"lon":-122.428893,"lat":37.767384},{"num":7,"lon":-122.403476,"lat":37.764817},{"num":7,"lon":-122.435489,"lat":37.797391},{"num":7,"lon":-122.433565,"lat":37.788049},{"num":7,"lon":-122.397785,"lat":37.764749},{"num":7,"lon":-122.433655,"lat":37.787717},{"num":7,"lon":-122.429065,"lat":37.767821},{"num":7,"lon":-122.437137,"lat":37.796627},{"num":7,"lon":-122.4196,"lat":37.765143},{"num":7,"lon":-122.431472,"lat":37.776859},{"num":7,"lon":-122.431955,"lat":37.779859},{"num":7,"lon":-122.433947,"lat":37.789744},{"num":7,"lon":-122.40469,"lat":37.766039},{"num":7,"lon":-122.429087,"lat":37.769302},{"num":7,"lon":-122.397569,"lat":37.762614},{"num":7,"lon":-122.41329,"lat":37.765377},{"num":7,"lon":-122.436791,"lat":37.803547},{"num":7,"lon":-122.437037,"lat":37.795937},{"num":7,"lon":-122.436958,"lat":37.804447},{"num":7,"lon":-122.435952,"lat":37.799707},{"num":7,"lon":-122.433268,"lat":37.785814},{"num":6,"lon":-122.39516,"lat":37.762621},{"num":6,"lon":-122.429929,"lat":37.770307},{"num":6,"lon":-122.428722,"lat":37.764621}]
var frequencyData = {"route":"10885","avg":"7"};

var busrouteNames = [[10867, '1 California'],[1033, '1AX California A Express'],[1034, '1BX California B Express'],[1002, '2 Clement'],[1003, '3 Jackson'],[1005, '5 Fulton'],[1055, '5R Fulton Rapid'],[10974, '6 Parnassus'],[1071, '7 Haight - Noriega'],[1072, '7R Noriega Rapid'],[10874, '7X Noriega Express'],[1110, '8 Bayshore'],[1108, '8AX Bayshore A Express'],[1109, '8BX Bayshore B Express'],[1900, '9 San Bruno'],[1901, '9R San Bruno Rapid'],[1010, '10 Townsend'],[1012, '12 Folsom/Pacific'],[10879, '14 Mission'],[10880, '14R Mission Rapid'],[10881, '14X Mission Express'],[10882, '18 46th Avenue'],[10883, '19 Polk'],[10884, '21 Hayes'],[10885, '22 Fillmore'],[10886, '23 Monterey'],[10887, '24 Divisadero'],[10888, '25 Treasure Island'],[10889, '27 Bryant'],[1028, '28 19th Avenue'],[10986, '28R 19th Avenue Rapid'],[10891, '29 Sunset'],[1030, '30 Stockton'],[10893, '30X Marina Express'],[10894, '31 Balboa'],[1031, '31AX Balboa A Express'],[1032, '31BX Balboa B Express'],[10895, '33 Ashbury-18th'],[10896, '35 Eureka'],[10897, '36 Teresita'],[10898, '37 Corbett'],[10899, '38 Geary'],[1038, '38AX Geary A Express'],[1039, '38BX Geary B Express'],[10900, '38R Geary Rapid'],[10901, '39 Coit Tower'],[10902, '41 Union'],[10903, '43 Masonic'],[10904, '44 OShaughnessy'],[1045, '45 Stockton - Union'],[10906, '47 Van Ness'],[10907, '48 24th Street'],[10908, '49 Van Ness-Mission'],[10909, '52 Excelsior'],[10910, '54 Felton'],[10911, '55 16th Street'],[10912, '56 Rutland'],[10913, '57 Parkmerced'],[10917, '66 Quintara'],[10918, '67 Bernal Heights'],[10919, '76X Marin Headlands Express'],[1081, '81X Caltrain Express'],[1082, '82X Levi Plaza Express'],[10921, '83X Mid Market Express'],[10922, '88 Bart Shuttle'],[10923, '90 San Bruno Owl'],[10924, '91 3Rd-19th Ave Owl'],[11029, 'E Embarcadero'],[10928, 'F Market & Wharves'],[1094, 'J Church'],[1196, 'KT Ingleside/Third'],[1198, 'L Taraval'],[1199, 'M Ocean View'],[1093, 'N Judah'],[10938, 'NX N Express'],[1197, 'S Castro Shuttle'],[1102, 'K-Owl'],[1103, 'L-Owl'],[1104, 'M-Owl'],[1105, 'N-Owl'],[1106, 'T-Owl'],[11030, 'Muni Metro Bus Shuttle'],[1060, 'Powell-Hyde'],[1059, 'Powell-Mason'],[10916, 'California']];

function addOption(el,i, arr){
  var option = document.createElement("option");
  option.value = el[0];
  option.text = el[1];
  if (el[0] == 10885)
    option.selected = true;
  this.appendChild(option);
}

$(document).ready(function() {
  var routeChooser = document.getElementById('routeChooser');
  busrouteNames.forEach(addOption, routeChooser);

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

  var route = map.append('svg')
        .attr("class", "route")
        .style("width", width + "px")
        .style("height", height + "px");

  zoomed();

  $('#draw').on('click', function () {
    $('.bus_route').remove();
    $('.bus_stop').remove();
    // d3.json('busstops/'+ $('#routeChooser').val() + '?time=' + $('#startHour').val(), function(data){
    //   route.call(renderStops, data);
    //   stopsData = data;
    // })
    d3.json('busroute/'+ $('#routeChooser').val() + '?time=' + $('#startHour').val(), function(data){
      route.call(renderRouteline, data);
      routelineData = data;
    })
    d3.json('frequency/'+ $('#routeChooser').val() + '?time=' + $('#startHour').val(), function(data){
      frequencyData = data;
    })
    routeFrequency(frequencyData);
    logit($('#routeChooser').val(), $('#startHour').val());
  });

  function zoomed() {
    var tiles = tile
        .scale(zoom.scale())
        .translate(zoom.translate())
        ();

    projection
        .scale(zoom.scale() / 2 / Math.PI)
        .translate(zoom.translate());

    // var image = layer
    //     .style(prefix + "transform", matrix3d(tiles.scale, tiles.translate))
    //   .selectAll(".tile")
    //     .data(tiles, function(d) { return d; });
    //
    // image.exit()
    //     .each(function(d) { this._xhr.abort(); })
    //     .remove();
    //
    // image.enter().append("svg")
    //     .attr("class", "tile")
    //     .style("left", function(d) { return d[0] * 256 + "px"; })
    //     .style("top", function(d) { return d[1] * 256 + "px"; })
    //     .each(function(d) {
    //       var svg = d3.select(this);        // vectiles- ['highroad','water-areas','skeletron']
    //       this._xhr = d3.json("http://" + ["a", "b", "c"][(d[0] * 31 + d[1]) % 3] + ".tile.openstreetmap.us/vectiles-highroad/" + d[2] + "/" + d[0] + "/" + d[1] + ".json", function(error, json) {
    //         var k = Math.pow(2, d[2]) * 256; // size of the world in pixels
    //
    //         tilePath.projection()
    //             .translate([k / 2 - d[0] * 256, k / 2 - d[1] * 256]) // [0°,0°] in pixels
    //             .scale(k / 2 / Math.PI);
    //
    //         svg.selectAll("path")
    //             .data(json.features.sort(function(a, b) { return a.properties.sort_key - b.properties.sort_key; }))
    //           .enter().append("path")
    //             .attr("class", function(d) { return d.properties.kind; })
    //             .attr("d", tilePath);
    //       });
    //     });

    ttHide();
    d3.select('.bus_route').remove();
    d3.selectAll('.bus_stop').remove();
    route.call(renderRouteline, routelineData)
        //  .call(renderStops, stopsData);
    routeFrequency(frequencyData);
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
    _.append('path')
      .datum(data)
      .attr('d', routePath)
      .attr('class', function(d){ return 'bus_route route-' + d.features[0].properties.route })
  }

  function routeFrequency(frequencyData){
    d3.selectAll('.route-'+frequencyData.route)
      .classed('freq-'+ frequencyData.avg, true)
  }

  function renderStops(_, data){
    _.selectAll('bus_stop')
        .data(data)
      .enter().append('circle').attr('class', 'bus_stop')
        .attr('r', function(d) { return Math.sqrt(d.num*2) })
        .attr('transform', function(d) { return 'translate(' + projection([d.lon,d.lat]) + ')'; })
        .on('mouseover', function(d) {
            var el = d3.select(this)
            ttFollow(el,d.num);
          })
          .on('mouseout', function(d){
            ttHide();
          });
  }

  function logit(routeNum, hour){
    // for help with development
    console.log('/'+ routeNum + '?time=' + hour);
  }

  function highlight(){
    var me = d3.select(this),
        thisData = me.datum();
    console.log(thisData);
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
})
