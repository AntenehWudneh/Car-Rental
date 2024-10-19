// models/userModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db"); // Adjust the path according to your file structure

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Enables createdAt and updatedAt fields
    createdAt: "created_at", // Custom field name for createdAt
    updatedAt: "updated_at", // Custom field name for updatedAt
  }
);

module.exports = User;
