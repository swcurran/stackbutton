module.exports.connections = {

  stackbuttonMongo: {
    host: process.env.MONGO_PORT_27017_TCP_ADDR, // defaults to `localhost` if omitted
    // port: blah, // defaults to 27017 if omitted
    // user: 'blah', // or omit if not relevant
    // password: 'blah', // or omit if not relevant
    // database: 'blah' // or omit if not relevant
  }
};

module.exports.models = {

  /***************************************************************************
   *                                                                          *
   * Your app's default connection. i.e. the name of one of your app's        *
   * connections (see `config/connections.js`)                                *
   *                                                                          *
   ***************************************************************************/
  connection: 'stackbuttonMongo'
};

module.exports.url = {
  hooks: 'http://24.108.0.99:8080'
};

// increase timeouts for mongo
module.exports.orm = {
  _hookTimeout: 60000 // I used 60 seconds
};module.exports.permissions = {
  _hookTimeout: 60000 // I used 60 seconds
};module.exports.pubsub = {
  _hookTimeout: 60000 // I used 60 seconds
};
