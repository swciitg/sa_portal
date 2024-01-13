const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: env.array('DATABASE_CLIENT'),
    connection: {
      host: env.array('DATABASE_HOST'),
      port: env.array('DATABASE_PORT'),
      database: env.array('DATABASE_NAME'),
      user: env.array('DATABASE_USERNAME'),
      password: env.array('DATABASE_PASSWORD'),
      schema: 'public', // Not required
      ssl:  false,
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});