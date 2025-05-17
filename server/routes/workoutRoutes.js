const express = require("express");

const Workout = require("../models/workoutModel");

const router = express.Router();

//Require Controllers
const { getWorkouts } = require("../controllers/workoutController");

// Get entire records

router.get("/", getWorkouts);

module.exports = router;
