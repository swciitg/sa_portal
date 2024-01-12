module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  emitErrors: false,
<<<<<<< HEAD
  url: 'https://swc.iitg.ac.in/sa_portal_backend/',
=======
  url: 'https://swc.iitg.ac.in/sa_portal_backend',
>>>>>>> 3b75c2a (changes)
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },
});
