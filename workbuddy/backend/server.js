require('dotenv').config();
const express = require('express');

const workoutsRoutes = require('./routes/workouts');

const  app =   express();
app.use((req,res,next) => {
        console.log(req.path, req.method);
        next()
})
app.use(workoutsRoutes)
app.listen(5000, (req,res) => {
    console.log('listening on port 5000');
});

