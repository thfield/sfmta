var fs = require('fs');

var check = /freq/;
var allFreq = [];

for (var hour=1; hour < 24; hour++){
  var folderContents = fs.readdirSync(hour.toString());
  var hourLineshapes = [];
  folderContents.forEach(function(route){
    if( check.test(route) ){
      var freqFile = hour + '/' + route;
      var frequency = JSON.parse(fs.readFileSync(freqFile, 'utf8'));
      allFreq.push(frequency.avg);

      var routenum = /\d+/.exec(route)[0];
      var lineshapeFile = hour + '/' + routenum + 'route.json';
      var lineshapes = JSON.parse(fs.readFileSync(lineshapeFile, 'utf8'));

      lineshapes.features.forEach(function(feature){
        feature.properties.freq = frequency.avg;
        hourLineshapes.push(feature);
      })
    }
  })
  fs.writeFile('routes'+hour+'oclock.json', JSON.stringify({
      "type": "FeatureCollection",
      "features": hourLineshapes
    }),
    function(err) {if (err) { return console.log(err); }}
  );

}

var min = Math.min.apply(null, allFreq),
    max = Math.max.apply(null, allFreq)

console.log(min, max);
