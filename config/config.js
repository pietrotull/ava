var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'avatract'
    },
    port: 3000,
    db: 'mongodb://localhost/avatract-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'avatract'
    },
    port: 3000,
    db: 'mongodb://localhost/avatract-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'avatract'
    },
    port: 3000,
    db: 'mongodb://localhost/avatract-production'
  }
};

module.exports = config[env];
