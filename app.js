var express = require('express'),
  app = express(),
  Station = require('./models/station');

app.MongoDB = require('mongodb');

/****** Any Additional Configuration ******/

config = require('./config');
config.init(app, function(err, db){
  app.db = db;
  db.collection('stations', function(err, stations){
    app.db.stations = stations;
  });
});


/****** Application Routes ********/

app.get('/', function(req, res){
  res.send('welcome to fun with node-geo!');
});

// handle the radius lookup query
app.get('/rest/stations', function(req, res){
  Station.findNearby(
    app.db.stations,
    req.query.lng,
    req.query.lat,
    req.query.distance,
    function(err, docs){
      if(err){
        res.send(500, err.message );
      }
      res.send(200, { stations: docs });
    });
});



/**********************************/


app.listen(3000);
console.log('node-geo fun, ready to go!\nvisit http://localhost:3000/');