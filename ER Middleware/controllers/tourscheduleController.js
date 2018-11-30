const Sequelize = require('sequelize');

module.exports = function(app){
    let tour_schedule = app.models.schema.tour_schedule;

    let tour_scheduleController = {
        // GET Request
        index: function(req,res){
            tour_schedule.findAll({})
            .then(function(tour_schedule){
                console.log('Succes at getting all tour schedules from the BD');
                res.status(200).json(tour_schedule);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
        create: function(req,res){
            tour_schedule.create({
                tour_id: req.body.tour_id || null,
                schedule_id: req.body.schedule_id || null
            })
            .then(newTour_schedule => {
                console.log('Created a new tour schedule');
                res.status(200).json(newTour_schedule);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
        read: function(req,res){
            let tour_schedule_id = req.params.id;
            tour_schedule.findById(req.params.id,{})
                .then(tour_schedule => {
                    if(!tour_schedule){
                        return res.status(404).json({
                            message: 'Tour schedule not found'
                        });
                    }
                    res.status(200).json(tour_schedule);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        // PUT Request
        update: function(req, res){
            tour_schedule.findById(req.params.id, {})
                .then(tour_schedule =>{
                    if(!tour_schedule){
                        return res.status(404).json({
                            message: 'Tour schedule not found'
                        });
                    }
                    tour_schedule
                        .update({ 
                            tour_id: req.body.tour_id || tour_schedule.tour_id,
                            schedule_id: req.body.schedule_id || tour_schedule.schedule_id
                        })
                        .then(() => res.status(200).json(tour_schedule))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        // DELETE Request
        delete: function (req, res) {
            tour_schedule.findById(req.params.id)
                .then(tour_schedule => {
                    if (!tour_schedule) {
                        return res.status(400).json({
                            message: 'Tour schedule Not Found'
                        });
                    }
                    return tour_schedule.destroy()
                        .then(() => res.status(200).json({
                            message: 'Tour schedule deleted'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        }
    }

    return tour_scheduleController;
};