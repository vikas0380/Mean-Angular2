var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'startupnews'
    },
    port: 3000,
    db: 'mongodb://localhost/startupnews-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'startupnews'
    },
    port: 3000,
    db: 'mongodb://localhost/startupnews-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'startupnews'
    },
    port: 3000,
    db: 'mongodb://localhost/startupnews-production'
  }
};

module.exports = config[env];
