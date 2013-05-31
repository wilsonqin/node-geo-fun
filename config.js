/*
 * Configuration happens here
 */

module.exports = {
    init: init
};

function init(app, callback){
  var MongoDB = app.MongoDB,
    server = new MongoDB.Server('localhost', 27017, {}),
    connection = new MongoDB.Db('node-geo-fun', server, { w: 1});

  //initialize the database connection for later use
  connection.open(function(err, db){
    app.db = db;
    console.log('connection opened');
    callback(err, db);
  });
}