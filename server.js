const express = require("express");
const cors = require("cors"); // Import CORS
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 5000;

// Load environment variables
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000", // Allow all origins, you can restrict it to specific domains if needed
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization", "x-user-id"], // Allowed headers
    credentials: true, // Enable cookies to be sent with requests
  })
);
// Database connection
const dbConnection = require("./db");
app.use(express.json());

app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));

const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Node JS Server Started on Port ${port}`));
