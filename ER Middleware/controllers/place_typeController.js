const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let place_type = app.models.schema.place_type;

    let place_typeController = {
        index: function(req,res){
            place_type.findAll({})
            .then(function(place_type){
                winston.log('Succes at getting all place type from the BD');
                res.status(200).json(place_type);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            place_type.create({
                name: req.body.name || null
            })
            .then(newPlace_type => {
                winston.log('Created a new place type');
                res.status(200).json(newPlace_type);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let place_type_id = req.params.id;
            place_type.findById(req.params.id,{})
                .then(place_type => {
                    if(!place_type){
                        return res.status(404).json({
                            message: 'Place type not found'
                        });
                    }
                    res.status(200).json(place_type);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            place_type.findById(req.params.place_type_id, {})
                .then(place_type =>{
                    if(!place_type){
                        return res.status(404).json({
                            message: 'Place type not found'
                        });
                    }
                    place_type
                        .update({ 
                            name: req.body.name || place_type.name
                        })
                        .then(() => res.status(200).json(place_type))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            place_type.findById(req.params.id)
                .then(place_type => {
                    if(!place_type){
                        return res.status(400).json({
                            message: 'Place type not found'
                        });
                    }
                    return place_type
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Place type unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//place_typeController

    return place_typeController;
};