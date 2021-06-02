require('dotenv').config();
module.exports = {
  port: process.env.PORT || 8080,
  mongoUrl: process.env.DB_CONN || "mongodb://localhost/playground_db",
  masterKey: process.env.APP_SECRET || "you-should-use-something-different"
};
