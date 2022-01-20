module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40c9ee35e35b9474587e77c8d4453837'),
  },
});
