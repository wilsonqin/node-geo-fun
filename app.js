var express = require('express'),
  app = express();

app.MongoDB = require('mongodb');

/****** Any Additional Configuration ******/

config = require('./config');
config.init(app);


/****** Application Routes ********/

app.get('/', function(req, res){
  res.send('welcome to fun with node-geo!');
});

// handle the radius lookup query
app.post('/rest/stations', function(req, res){
  var db = app.db,
    query = {
      '$nearSphere': {
        '$geometry': {
          type: 'Point',
          coordinates: [ req.query.lng, req.query.lat ]
        },
        '$maxDistance': req.query.distance
      }
    };

  db.collection('stations', function(err, stations){
    stations.find(query, function(err, doc){
      if(err){
        res.json(500, { error: err.message });
      }
      res.json(200, { stations: doc });
    });
  });
});



/**********************************/


app.listen(3000);
console.log('node-geo fun, ready to go!\nvisit http://localhost:3000/');