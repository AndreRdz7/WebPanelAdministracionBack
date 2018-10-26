const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let narrative = app.models.schema.narrative;

    let narrativeController = {
        index: function(req,res){
            narrative.findAll({})
            .then(function(narrative){
                winston.log('Succes at getting all narratives from the BD');
                res.status(200).json(narrative);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            narrative.create({
                audio_path: req.body.audio_path || null,
                description: req.body.description || null
            })
            .then(newNarrative => {
                winston.log('Created a new narrative');
                res.status(200).json(newNarrative);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let narrative_id = req.params.id;
            narrative.findById(req.params.id,{})
                .then(narrative => {
                    if(!narrative){
                        return res.status(404).json({
                            message: 'Narrative not found'
                        });
                    }
                    res.status(200).json(narrative);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            narrative.findById(req.params.narrative_id, {})
                .then(narrative =>{

                })
        },
        delete: function(req,res){
            narrative.findById(req.params.id)
                .then(narrative => {
                    if(!narrative){
                        return res.status(400).json({
                            message: 'Narrative not found'
                        });
                    }
                    return narrative
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Narrative unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//narrativeController

    return narrativeController;
};