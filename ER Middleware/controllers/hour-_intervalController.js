const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let hour_interval = app.models.schema.hour_interval;

    let hour_intervalController = {
        index: function(req,res){
            hour_interval.findAll({})
            .then(function(hour_interval){
                winston.log('Succes at getting all hour intervals from the BD');
                res.status(200).json(hour_interval);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            hour_interval.create({
                start_time: req.body.start_time || null,
                end_time: req.body.end_time || null,
                frequency: req.body.frequency || null
            })
            .then(newHour_interval => {
                winston.log('Created a new hour interval');
                res.status(200).json(newHour_interval);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let hour_interval_id = req.params.id;
            hour_interval.findById(req.params.id,{})
                .then(hour_interval => {
                    if(!hour_interval){
                        return res.status(404).json({
                            message: 'Hour interval not found'
                        });
                    }
                    res.status(200).json(hour_interval);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            hour_interval.findById(req.params.hour_interval_id, {})
                .then(hour_interval =>{
                    if(!hour_interval){
                        return res.status(404).json({
                            message: 'Hour interval not found'
                        });
                    }
                    hour_interval
                        .update({ 
                            start_time: req.body.start_time || hour_interval.start_time,
                            end_time: req.body.end_time || hour_interval.end_time,
                            frequency: req.body.frequency || hour_interval.frequency
                        })
                        .then(() => res.status(200).json(hour_interval))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            hour_interval.findById(req.params.id)
                .then(hour_interval => {
                    if(!hour_interval){
                        return res.status(400).json({
                            message: 'Hour interval not found'
                        });
                    }
                    return stop
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Hour interval unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }

    return hour_intervalController;
};