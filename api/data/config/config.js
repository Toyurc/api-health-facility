const fs = require('fs');
// require('dotenv/config');

module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'HFMS',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'b4eed4f1524b2e',
    password: 'f0ecdbc1',
    database: 'heroku_d1c8189056d7640',
    host: 'us-cdbr-iron-east-03.cleardb.net',
    dialect: 'mysql'
  }
};

// mysql://b4eed4f1524b2e:04064154@us-cdbr-iron-east-03.cleardb.net/heroku_d1c8189056d7640?reconnect=true