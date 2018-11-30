const Sequelize = require('sequelize');

module.exports = function(app){
    let place = app.models.schema.place;

    let placeController = {
        // GET Request
        index: function(req,res){
            place.findAll({})
            .then(function(place){
                console.log('Succes at getting all places from the BD');
                res.status(200).json(place);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
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
                console.log('Created a new place');
                res.status(200).json(newPlace);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
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
        // PUT Request
        update: function(req, res){
            place.findById(req.params.id, {})
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
        // DELETE Request
        delete: function (req, res) {
            place.findById(req.params.id)
                .then(place => {
                    if (!place) {
                        return res.status(400).json({
                            message: 'Place Not Found'
                        });
                    }
                    return place.destroy()
                        .then(() => res.status(200).json({
                            message: 'Placew deleted'
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

    return placeController;
};