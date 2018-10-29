const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let activated_at = app.models.schema.activated_at;

    let activated_atController = {
        index: function(req,res){
            activated_at.findAll({})
            .then(function(activated_at){
                winston.log('Succes at getting all activations from the BD');
                res.status(200).json(activated_at);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            activated_at.create({
            })
            .then(newActivated_at => {
                winston.log('Created a new activation');
                res.status(200).json(newActivated_at);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let activated_at_id = req.params.id;
            activated_at.findById(req.params.id,{})
                .then(activated_at => {
                    if(!activated_at){
                        return res.status(404).json({
                            message: 'Activation not found'
                        });
                    }
                    res.status(200).json(activated_at);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            activated_at.findById(req.params.activated_at_id, {})
                .then(activated_at =>{
                    if(!activated_at){
                        return res.status(404).json({
                            message: 'Activation not found'
                        });
                    }
                    activated_at
                        .update({
                        })
                        .then(() => res.status(200).json(activated_at))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            activated_at.findById(req.params.id)
                .then(activated_at => {
                    if(!activated_at){
                        return res.status(400).json({
                            message: 'Activarion not found'
                        });
                    }
                    return activated_at
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Activation unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//activated_atController

    return activated_atController;
};