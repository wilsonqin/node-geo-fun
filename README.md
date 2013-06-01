Node Geo Fun
====================

Fun with Node.js and MongoDB, demonstrating a use case for a geography based API using geo-spatial indices.

USAGE:
---------------------

  1. $ ./runDB.sh
      Starts mongod on default port 27017
  2. $ ./runApp.sh
      + Populates the database called 'node-geo-fun' with a stations collection and creates a geospatial index on it.
      + Starts the API server on 'localhost' port 3000
