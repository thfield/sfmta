var fs = require('fs');

var check = /route/;
var allFreq = [];

for (var hour=1; hour < 24; hour++){
  var folderContents = fs.readdirSync(hour.toString());
  var hourLineshapes = [];
  folderContents.forEach(function(route){
    if( check.test(route) ){
      var routenum = /\d+/.exec(route)[0];

      var lineshapeFile = hour + '/' + route;
      var lineshapes
      try {
        lineshapes = JSON.parse(fs.readFileSync(lineshapeFile, 'utf8'));
        lineshapes.features.forEach(function(feature){
          allFreq.push(feature.properties.freq);
          hourLineshapes.push(feature);
        })
      } catch(err){
        console.log(err);
      }
    }
  })
  if (hourLineshapes.length > 0 ) {
    fs.writeFile('routes'+hour+'oclock.json', JSON.stringify({
        "type": "FeatureCollection",
        "features": hourLineshapes
      }),
      function(err) {if (err) { return console.log(err); }}
    );
  }


}

var min = Math.min.apply(null, allFreq),
    max = Math.max.apply(null, allFreq)

console.log(min, max);
