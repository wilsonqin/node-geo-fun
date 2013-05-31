/* Station Model */
/*
 *  location:
        point
        [lng, lat]
    stationName: String
 */
var EARTH_RADIUS_MILES = 3959;

/* should return all stations within the nearest distance.
 * extra: sort by alphabet or distance
 * callback: err -> results -> () */
function findNearby(stations, lng, lat, dist, callback){
  var query = {
    'location': {
      '$nearSphere': [ Number(lng), Number(lat) ],
      '$maxDistance': dist / EARTH_RADIUS_MILES
    }
  };

  stations.find(query, { 'stationName': true, 'location': true }).sort({'statoin'})
    .toArray(callback);
};


module.exports = {
  findNearby: findNearby
};
  