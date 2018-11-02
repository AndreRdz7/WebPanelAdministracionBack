const Sequelize = require('sequelize');

module.exports = function(app){
    let place_type = app.models.schema.place_type;

    let place_typeController = {
        index: function(req,res){
            place_type.findAll({})
            .then(function(place_type){
                console.log('Succes at getting all place types from the BD');
                res.status(200).json(place_type);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            place_type.create({
                name: req.body.name || null
            })
            .then(newPlace_type => {
                console.log('Created a new place type');
                res.status(200).json(newPlace_type);
            })
            .catch(err => {
                console.error(err);
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
            place_type.findById(req.params.id, {})
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
        delete: function (req, res) {
            place_type.findById(req.params.id)
                .then(place_type => {
                    if (!place_type) {
                        return res.status(400).json({
                            message: 'Place type Not Found'
                        });
                    }
                    return place_type.destroy()
                        .then(() => res.status(200).json({
                            message: 'Place type deleted'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        }
    }//place_typeController

    return place_typeController;
};