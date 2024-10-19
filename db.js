const { Sequelize } = require("sequelize");
require("dotenv").config(); // If you're using environment variables

// Initialize the Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres", // Adjust based on the database you're using
    port: process.env.DB_PORT || 5432, // Default port for Postgres
  }
);

// Test the connection to the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
})();

module.exports = sequelize;
