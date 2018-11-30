const Sequelize = require('sequelize');

module.exports = function(app){
    let image = app.models.schema.image;

    let imageController = {
        // GET Request
        index: function(req,res){
            image.findAll({})
            .then(function(image){
                console.log('Succes at getting all images from the BD');
                res.status(200).json(image);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
        create: function(req,res){
            image.create({
                image_path: req.body.image_path || null,
                description: req.body.description || null
            })
            .then(newImage => {
                console.log('Created a new image');
                res.status(200).json(newImage);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
        read: function(req,res){
            let image_id = req.params.id;
            image.findById(req.params.id,{})
                .then(image => {
                    if(!image){
                        return res.status(404).json({
                            message: 'Image not found'
                        });
                    }
                    res.status(200).json(image);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        // PUT Request
        update: function(req, res){
            image.findById(req.params.id, {})
                .then(image =>{
                    if(!image){
                        return res.status(404).json({
                            message: 'Image not found'
                        });
                    }
                    image
                        .update({
                            image_path: req.body.image_path || image.image_path,
                            description: req.body.description || image.description
                        })
                        .then(() => res.status(200).json(image))
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
            image.findById(req.params.id)
                .then(image => {
                    if (!image) {
                        return res.status(400).json({
                            message: 'Image Not Found'
                        });
                    }
                    return image.destroy()
                        .then(() => res.status(200).json({
                            message: 'Image deleted'
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

    return imageController;
};