// Get from .env file
require('dotenv').config()

const cors = require('cors');

// 1. Get Express from node module
const express= require('express')
const mongoose= require('mongoose')
const workoutRoutes= require('./routes/workouts')

// 2. express app
const app= express()

// // Middleware
// app.use((req, res, next)=>{
//     console.log(req.path, req.method)

//     // Invoke 'next' arg to proceed to next code
//     next()
// })

// This is considered Middleware
// Allows to access req in routes/workouts.js
app.use(express.json())


//
app.use(cors())

//// routes
// app.get('/', (req, res) =>{
//         res.json({mssg: 'Welcome to the App'})
// })

// Routes, uses Router from workouts.js
// routes calls with prefix of '/api/workouts'
app.use('/api/workouts', workoutRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

	// listen for request
	// process.env.PORT = PORT number in .env file
	app.listen(process.env.PORT , () => {
		console.log('connected to server and listening on port ', process.env.PORT)
	})

}).catch((error)=>{
    console.log(error)
})


