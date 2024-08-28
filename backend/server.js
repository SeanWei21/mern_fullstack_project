// Get from .env file
require('dotenv').config()


// 1. Get Express from node module
const express= require('express')
const workoutRoutes= require('./routes/workouts')

// 2. express app
const app= express()

// // Middleware
// app.use((req, res, next)=>{
//     console.log(req.path, req.method)

//     // Invoke 'next' arg to proceed to next code
//     next()
// })
app.use(express.json())


//// routes
// app.get('/', (req, res) =>{
//         res.json({mssg: 'Welcome to the App'})
// })

// Routes, uses Router from workouts.js
// routes calls with prefix of '/api/workouts'
app.use('/api/workouts', workoutRoutes)


// listen for request
// process.env.PORT = PORT number in .env file
app.listen(process.env.PORT , () => {
        console.log('listening on port 4000!')
})