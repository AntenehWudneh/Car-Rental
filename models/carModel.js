// models/carModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db"); // Adjust the path according to your file structure

const Car = sequelize.define(
  "Car",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuelType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rentPerHour: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bookedTimeSlots: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
  },
  {
    timestamps: true, // Enables createdAt and updatedAt fields
  }
);

module.exports = Car;
