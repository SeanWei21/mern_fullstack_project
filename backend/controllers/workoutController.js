const mongoose= require('mongoose')
const workoutModel= require('../model/workoutModel')

// get all workouts
const getAllWorkouts= async (req, res) => {
    const workouts= await workoutModel.find({}).sort({createdAt:-1}) 
    res.status(200).json(workouts)
} 

// get a single workout
const getSingleWorkout=  async (req, res) => {
    const {id}= req.params

    // check input id format validation
    // follows the mongoDB format else will throw error and crash server
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }
    const workout= await workoutModel.findById(id)
    

    // Check if workout found
    if (!workout) {
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

// create new workout
const createWorkout = async (req, res)=>{

    // deconstruct
    const {title, load, reps} = req.body

    // Error checking
    let emptyFields= []

    if (!title) {
        emptyFields.push('title')
    } if (!load) {
        emptyFields.push('load')
    } if (!reps) {
        emptyFields.push('reps')
    } if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    try {
        const workout= await workoutModel.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {

        // sends back error status
        res.status(400).json({error: error.message})
    }
}

// delete a workout

const deleteWorkout= async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout= await workoutModel.findOneAndDelete({_id: id})

    // Check if workout found
    if (!workout) {
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

// update a workout
const updateWorkout= async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await workoutModel.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    // Check if workout found
    if (!workout) {
        return res.status(400).json({error: 'No such workout'})
    }

    // res.status(200).json({reps: reps, ...workout})
    res.status(200).json(workout)
}

module.exports= {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}