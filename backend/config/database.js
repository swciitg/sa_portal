const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'host.docker.internal',
      port: 5432,
      database: 'sa_portal_strapi',
      user: 'sa_portal_admin',
      password: 'swciitghy',
      schema: 'public', // Not required
      ssl: false, // Not required
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
