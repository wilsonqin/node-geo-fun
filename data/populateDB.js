/* Give some mock data */
var data = require('./stations.json'),
  config = require('./../config'),
  Q = require('q'),
  app = {},
  length = data.stations.length,
  completed = 0;

app.MongoDB = require('mongodb');

config.init(app, function(err, db){
  insertingRecords = Q.defer();
  //populate the stations collection
  db.createCollection('stations', function(err, stations){
    for(var i in data.stations){
      stations.insert(data.stations[i], function(err, result){
        completed += 1;
        if(!err){
          console.log('record sent to db');
          if(completed === length){
            insertingRecords.resolve(stations)
          }
        }
      });
    }

    //simply wait until all records are written, before creating index
    Q.when(insertingRecords).then(function(){
      stations.ensureIndex({ location: '2dsphere' }, function(err, result){
        console.log('index created on stations');
        process.exit();
      });
    });
  });

});
