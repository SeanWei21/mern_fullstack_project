// 1
const express= require('express')

const workoutModel= require('../model/workoutModel')
const {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// 2
const router = express.Router()

// nom install mongoose
// ODM library: object-data-model

// GET all workouts
router.get('/', getAllWorkouts)

// GET a single workouts
router.get('/:id', getSingleWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

// export router
module.exports = router