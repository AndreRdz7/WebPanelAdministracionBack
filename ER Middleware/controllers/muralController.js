const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let mural = app.models.schema.mural;

    let muralController = {
        index: function(req,res){
            mural.findAll({})
            .then(function(mural){
                winston.log('Succes at getting all mural from the BD');
                res.status(200).json(mural);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            mural.create({
                audio_path: req.body.audio_path || null,
                description: req.body.description || null
            })
            .then(newMural => {
                winston.log('Created a new mural');
                res.status(200).json(newMural);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let mural_id = req.params.id;
            mural.findById(req.params.id,{})
                .then(mural => {
                    if(!mural){
                        return res.status(404).json({
                            message: 'Mural not found'
                        });
                    }
                    res.status(200).json(mural);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            mural.findById(req.params.mural_id, {})
                .then(mural =>{
                    if(!mural){
                        return res.status(404).json({
                            message: 'Mural not found'
                        });
                    }
                    mural
                        .update({ 
                            audio_path: req.body.audio_path || mural.audio_path,
                            description: req.body.description || mural.description
                        })
                        .then(() => res.status(200).json(mural))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            mural.findById(req.params.id)
                .then(mural => {
                    if(!mural){
                        return res.status(400).json({
                            message: 'Mural not found'
                        });
                    }
                    return mural
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Mural unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//muralController

    return muralController;
};