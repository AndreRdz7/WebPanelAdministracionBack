const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let image = app.models.schema.image;

    let imageController = {
        index: function(req,res){
            image.findAll({})
            .then(function(image){
                winston.log('Succes at getting all images from the BD');
                res.status(200).json(image);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            image.create({
                image_path: req.body.image_path || null,
                description: req.body.description || null
            })
            .then(newImage => {
                winston.log('Created a new image');
                res.status(200).json(newImage);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
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
        update: function(req, res){
            image.findById(req.params.image_id, {})
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
        delete: function(req,res){
            image.findById(req.params.id)
                .then(image => {
                    if(!image){
                        return res.status(400).json({
                            message: 'Image not found'
                        });
                    }
                    return image
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Image unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//imageController

    return imageController;
};