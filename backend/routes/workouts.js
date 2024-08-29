// 1
const express= require('express')

const workoutModel= require('../model/workoutModel')

// 2
const router = express.Router()

// nom install mongoose
// ODM library: object-data-model

// GET all workouts
router.get('/', (req, res) => {
    res.json({msg: 'GET all workouts'})
})

// GET a single workouts
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

// POST a new workout
router.post('/', async (req, res)=>{

    // deconstruct
    const {title, load, reps} = req.body

    try {
        const workout= await workoutModel.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {

        // sends back error status
        res.status(400).json({error: error.messages})
    }

    // res.json({mssg: 'POST a new workout'})
})

// DELETE a workout
router.delete('/:id', (req, res)=>{
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res)=>{
    res.json({mssg: 'UPDATE a workout'})
})

// export router
module.exports = router