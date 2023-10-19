const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'host.docker.internal',
      port: 5432,
      database: 'sports_board',
      user: 'sports_board_user',
      password: 'KHU4VUOZuRiwLyv',
      schema: 'public', // Not required
      ssl:  false,
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});