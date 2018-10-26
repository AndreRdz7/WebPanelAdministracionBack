const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let tour_place = app.models.schema.tour_place;

    let tour_placeController = {
        index: function(req,res){
            tour_place.findAll({})
            .then(function(tour_place){
                winston.log('Succes at getting all tour place from the BD');
                res.status(200).json(tour_place);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            tour_place.create({
                tour_id: req.params.tour_id || null,
                place_id: req.body.place_id || null
            })
            .then(newTour_place => {
                winston.log('Created a new tour place');
                res.status(200).json(newTour_place);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let tour_place_id = req.params.id;
            tour_place.findById(req.params.id,{})
                .then(tour_place => {
                    if(!tour_place){
                        return res.status(404).json({
                            message: 'Tour place not found'
                        });
                    }
                    res.status(200).json(tour_place);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            tour_place.findById(req.params.tour_place_id, {})
                .then(tour_place =>{
                    if(!tour_place){
                        return res.status(404).json({
                            message: 'Tour place not found'
                        });
                    }
                    tour_place
                        .update({ 
                            tour_id: req.params.tour_id || tour_place.tour_id,
                            place_id: req.body.place_id || tour_place.place_id
                        })
                        .then(() => res.status(200).json(tour_place))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            tour_place.findById(req.params.id)
                .then(tour_place => {
                    if(!tour_place){
                        return res.status(400).json({
                            message: 'Tour place not found'
                        });
                    }
                    return tour_place
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Tour place unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//tour_placeController

    return tour_placeController;
};