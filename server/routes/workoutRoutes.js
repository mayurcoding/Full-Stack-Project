const express = require("express");

const Workout = require("../models/workoutModel");

const router = express.Router();

//Require Controllers
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

// Get entire records

router.get("/", getWorkouts);

//Get a single record

router.get("/:id", getWorkout);

//Create a new record
router.post("/", createWorkout);

//Update a record
router.patch("/:id", editWorkout);

//Delete Record
router.delete("/:id", deleteWorkout);



module.exports = router;
