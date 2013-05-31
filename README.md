Node Geo Fun

Fun with Node.js and MongoDB, demonstrating a use case for a geography based API using geo-spatial indicies.

USAGE:
  1. $ ./runDB.sh
      Starts mongod on default port 27017
  2. $ ./runApp.sh
      a. Populates the database called 'node-geo-fun' with a stations collection and creates a geospatial index on it.
      b. Starts the API server on 'localhost' port 3000