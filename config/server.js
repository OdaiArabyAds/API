module.exports = ({ env }) => ({
  host: env("HOST", "127.0.0.1"),
  port: env.int("PORT", process.env.PORT || 8082),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "828811e8aace1aa789067dffc85af376"),
    },
  },
});
