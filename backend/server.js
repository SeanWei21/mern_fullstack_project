// Get from .env file
require('dotenv').config()


// 1. Get Express from node module
const express= require('express')

// 2. express app
const app= express()

// Middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method)

    // Invoke 'next' arg to proceed to next code
    next()
})

// routes
app.get('/', (req, res) =>{
        res.json({mssg: 'Welcome to the App'})
})

// listen for request
// process.env.PORT = PORT number in .env file
app.listen(process.env.PORT , () => {
        console.log('listening on port 4000!')
})