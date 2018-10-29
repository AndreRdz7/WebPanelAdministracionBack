const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let tour_schedule = app.models.schema.tour_schedule;

    let tour_scheduleController = {
        index: function(req,res){
            tour_schedule.findAll({})
            .then(function(tour_schedule){
                winston.log('Succes at getting all tour schedules from the BD');
                res.status(200).json(tour_schedule);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            tour_schedule.create({
                tour_id: req.body.tour_id || null,
                schedule_id: req.body.schedule_id || null
            })
            .then(newTour_schedule => {
                winston.log('Created a new tour schedule');
                res.status(200).json(newTour_schedule);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
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
        update: function(req, res){
            tour_schedule.findById(req.params.tour_schedule_id, {})
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
        delete: function(req,res){
            tour_schedule.findById(req.params.id)
                .then(tour_schedule => {
                    if(!tour_schedule){
                        return res.status(400).json({
                            message: 'Tour schedule not found'
                        });
                    }
                    return tour_schedule
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Tour schedule unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }

    return tour_scheduleController;
};