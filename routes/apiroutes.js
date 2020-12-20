const router = require("express").Router();
const workout = require("../models/workout");
const { put } = require("./htmlroutes");

router.post("/api/workouts", ({body}, res) => {
    workout.create(body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    workout.findByIdAndUpdate ({_id: params.id}, {$push: {exercises: body}}).then(dbworkout => {
        res.json(dbworkout);
    }).catch(err => {
        res.status(400).json(err);
    });
})