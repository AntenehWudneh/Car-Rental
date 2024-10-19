// models/bookingModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db"); // Adjust the path according to your file structure

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "cars",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    booked_time_slots: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    total_hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driver_required: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true, // Enables createdAt and updatedAt fields
    createdAt: "created_at", // Custom field name for createdAt
    updatedAt: "updated_at", // Custom field name for updatedAt
    tableName: "bookings",
  }
);

module.exports = Booking;
