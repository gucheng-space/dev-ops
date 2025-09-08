export default () => ({
  port: parseInt(process.env.PORT!, 10),
  jwtSecret: process.env.JWT_SECRET!,
  databaseUrl: process.env.DATABASE_URL!,
});
