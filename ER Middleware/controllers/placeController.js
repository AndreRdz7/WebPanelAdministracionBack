const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let place = app.models.schema.place;

    let placeController = {
        index: function(req,res){
            place.findAll({})
            .then(function(place){
                winston.log('Succes at getting all places from the BD');
                res.status(200).json(place);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            place.create({
                place_type_id: req.body.place_type_id || null,
                narrative_id: req.body.narrative_id || null,
                name: req.body.name || null,
                longitude: req.body.longitude || null,
                latitude: req.body.latitude || null,
                description: req.body.description || null
            })
            .then(newPlace => {
                winston.log('Created a new place');
                res.status(200).json(newPlace);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let place_id = req.params.id;
            place.findById(req.params.id,{})
                .then(place => {
                    if(!place){
                        return res.status(404).json({
                            message: 'Place not found'
                        });
                    }
                    res.status(200).json(place);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            place.findById(req.params.place_id, {})
                .then(place =>{
                    if(!place){
                        return res.status(404).json({
                            message: 'Place not found'
                        });
                    }
                    place
                        .update({ 
                            place_type_id: req.body.place_type_id || place.place_type_id,
                            narrative_id: req.body.narrative_id || place.narrative_id,
                            name: req.body.name || place.name,
                            longitude: req.body.longitude || place.longitude,
                            latitude: req.body.latitude || place.latitude,
                            description: req.body.description || place.description
                        })
                        .then(() => res.status(200).json(place))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            place.findById(req.params.id)
                .then(place => {
                    if(!place){
                        return res.status(400).json({
                            message: 'Place not found'
                        });
                    }
                    return place
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Place unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//place_imageController

    return placeController;
};