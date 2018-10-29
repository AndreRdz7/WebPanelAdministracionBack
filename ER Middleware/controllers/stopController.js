const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let stop = app.models.schema.stop;

    let stopController = {
        index: function(req,res){
            stop.findAll({})
            .then(function(stop){
                winston.log('Succes at getting all stops from the BD');
                res.status(200).json(stop);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            stop.create({
                name: req.body.name || null,
                longitude: req.body.longitude || null,
                latitude: req.body.latitude || null,
                description: req.body.description || null
            })
            .then(newStop => {
                winston.log('Created a new stop');
                res.status(200).json(newStop);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let stop_id = req.params.id;
            stop.findById(req.params.id,{})
                .then(stop => {
                    if(!stop){
                        return res.status(404).json({
                            message: 'Stop not found'
                        });
                    }
                    res.status(200).json(stop);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            stop.findById(req.params.id, {})
                .then(stop =>{
                    if(!stop){
                        return res.status(404).json({
                            message: 'Stop not found'
                        });
                    }
                    stop
                        .update({ 
                            name: req.body.name || stop.name,
                            longitude: req.body.longitude || stop.longitude,
                            latitude: req.body.latitude || stop.latitude,
                            description: req.body.description || stop.description
                        })
                        .then(() => res.status(200).json(stop))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function (req, res) {
            stop.findById(req.params.id)
                .then(stop => {
                    if (!stop) {
                        return res.status(400).json({
                            message: 'Stop Not Found'
                        });
                    }
                    return stop.destroy()
                        .then(() => res.status(200).json({
                            message: 'Stop deleted'
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

    return stopController;
};