const express = require("express");
const cors = require("cors");
const app = express();

//Port
const port = process.env.PORT || 4000;

//DB connection
require("./db/connection");

//Require Routes
const workoutRoutes = require("./routes/workoutRoutes");

// Middleware
app.use(express.json());

app.use(cors());

// Routes
app.use("/api/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.send("Hello  Mayur");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
