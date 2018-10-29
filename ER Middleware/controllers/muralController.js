const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let mural = app.models.schema.mural;

    let muralController = {
        index: function(req,res){
            mural.findAll({})
            .then(function(mural){
                winston.log('Succes at getting all murals from the BD');
                res.status(200).json(mural);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            mural.create({
                title: req.body.title || null,
                author_name: req.body.author_name || null,
                author_last_name: req.body.author_last_name || null,
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
            mural.findById(req.params.id, {})
                .then(mural =>{
                    if(!mural){
                        return res.status(404).json({
                            message: 'Mural not found'
                        });
                    }
                    mural
                        .update({ 
                            title: req.body.title || mural.title,
                            author_name: req.body.author_name || mural.author_name,
                            author_last_name: req.body.author_last_name || mural.author_last_name,
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
        delete: function (req, res) {
            mural.findById(req.params.id)
                .then(mural => {
                    if (!mural) {
                        return res.status(400).json({
                            message: 'Mural Not Found'
                        });
                    }
                    return mural.destroy()
                        .then(() => res.status(200).json({
                            message: 'Mural deleted'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        }
    }//muralController

    return muralController;
};