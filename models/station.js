/* Station Model */
/*
 *  location: [lng, lat]
    stationName: String
 */
var EARTH_RADIUS_MILES = 3959;

/* should return all stations within the nearest distance.
 * default sorted by distance from specified point
 * callback: err -> results -> () */
function findNearby(stations, lng, lat, dist, callback){
  var query = {
    'location': {
      '$nearSphere': [ Number(lng), Number(lat) ],
      '$maxDistance': (dist / EARTH_RADIUS_MILES)
    }
  };

  stations.find(query, { 'stationName': true, 'location': true })
    .toArray(callback);
};


module.exports = {
  findNearby: findNearby
};
  