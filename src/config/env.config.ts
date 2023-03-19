export const EnvConfiguration = () => ({
  // Environment
  environment: process.env.NODE_ENV,
  // Port
  port: +process.env.PORT,
  // DB
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  // Client URL
  clientUrl: process.env.CLIENT_URL,
  // Session
  sessionSecret: process.env.SESSION_SECRET,
});
