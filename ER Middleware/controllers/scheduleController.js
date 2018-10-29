const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let schedule = app.models.schema.schedule;

    let scheduleController = {
        index: function(req,res){
            schedule.findAll({})
            .then(function(schedule){
                winston.log('Succes at getting all schedules from the BD');
                res.status(200).json(schedule);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            schedule.create({
                date_interval_id: req.body.date_interval_id || null,
                hour_interval_id: req.body.hour_interval_id || null
            })
            .then(newSchedule => {
                winston.log('Created a new schedule');
                res.status(200).json(newSchedule);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let schedule_id = req.params.id;
            schedule.findById(req.params.id,{})
                .then(schedule => {
                    if(!schedule){
                        return res.status(404).json({
                            message: 'Schedule not found'
                        });
                    }
                    res.status(200).json(schedule);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            schedule.findById(req.params.id, {})
                .then(schedule =>{
                    if(!schedule){
                        return res.status(404).json({
                            message: 'Schedule not found'
                        });
                    }
                    schedule
                        .update({ 
                            date_interval_id: req.body.date_interval_id || schedule.date_interval_id,
                            hour_interval_id: req.body.hour_interval_id || schedule.hour_interval_id
                        })
                        .then(() => res.status(200).json(schedule))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            schedule.findById(req.params.id)
                .then(schedule => {
                    if(!schedule){
                        return res.status(400).json({
                            message: 'Schedule not found'
                        });
                    }
                    return schedule
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Schedule unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }

    return scheduleController;
};