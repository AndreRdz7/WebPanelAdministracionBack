const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let date_interval = app.models.schema.date_interval;

    let date_intervalController = {
        index: function(req,res){
            date_interval.findAll({})
            .then(function(date_interval){
                winston.log('Succes at getting all date intervals from the BD');
                res.status(200).json(date_interval);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            date_interval.create({
                tour_id: req.body.tour_id || null,
                schedule_id: req.body.schedule_id || null
            })
            .then(newDate_interval => {
                winston.log('Created a new date interval');
                res.status(200).json(newDate_interval);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let date_interval_id = req.params.id;
            date_interval.findById(req.params.id,{})
                .then(date_interval => {
                    if(!date_interval){
                        return res.status(404).json({
                            message: 'Date interval not found'
                        });
                    }
                    res.status(200).json(date_interval);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            date_interval.findById(req.params.date_interval_id, {})
                .then(date_interval =>{
                    if(!date_interval){
                        return res.status(404).json({
                            message: 'Date interval not found'
                        });
                    }
                    date_interval
                        .update({ 
                            tour_id: req.body.tour_id || date_interval.tour_id,
                            schedule_id: req.body.schedule_id || date_interval.schedule_id
                        })
                        .then(() => res.status(200).json(date_interval))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            date_interval.findById(req.params.id)
                .then(date_interval => {
                    if(!date_interval){
                        return res.status(400).json({
                            message: 'Date interval not found'
                        });
                    }
                    return date_interval
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Date interval unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }

    return date_intervalController;
};