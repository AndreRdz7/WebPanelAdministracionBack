const Sequelize = require('sequelize');

module.exports = function(app){
    let place_image = app.models.schema.place_image;

    let place_imageController = {
        // GET Request
        index: function(req,res){
            place_image.findAll({})
            .then(function(place_image){
                console.log('Succes at getting all place images from the BD');
                res.status(200).json(place_image);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
        create: function(req,res){
            place_image.create({
                place_id: req.body.place_id || null,
                image_id: req.body.image_id || null
            })
            .then(newPlace_image => {
                console.log('Created a new place image');
                res.status(200).json(newPlace_image);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
        read: function(req,res){
            let place_image_id = req.params.id;
            place_image.findById(req.params.id,{})
                .then(place_image => {
                    if(!place_image){
                        return res.status(404).json({
                            message: 'Place image not found'
                        });
                    }
                    res.status(200).json(place_image);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        // PUT Request
        update: function(req, res){
            place_image.findById(req.params.id, {})
                .then(place_image =>{
                    if(!place_image){
                        return res.status(404).json({
                            message: 'Place image not found'
                        });
                    }
                    place_image
                        .update({ 
                            place_id: req.body.place_id || place_image.place_id,
                            image_id: req.body.image_id || place_image.image_id
                        })
                        .then(() => res.status(200).json(place_image))
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
            place_image.findById(req.params.id)
                .then(place_image => {
                    if (!place_image) {
                        return res.status(400).json({
                            message: 'Place image Not Found'
                        });
                    }
                    return place_image.destroy()
                        .then(() => res.status(200).json({
                            message: 'Place image deleted'
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

    return place_imageController;
};