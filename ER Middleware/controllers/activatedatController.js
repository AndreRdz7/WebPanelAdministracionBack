const Sequelize = require('sequelize');

module.exports = function(app){
    let activated_at = app.models.schema.activated_at;

    let activated_atController = {
        // GET Request
        index: function(req,res){
            activated_at.findAll({})
            .then(function(activated_at){
                console.log('Succes at getting all activations from the BD');
                res.status(200).json(activated_at);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
        create: function(req,res){
            activated_at.create({
            })
            .then(newActivated_at => {
                console.log('Created a new activation');
                res.status(200).json(newActivated_at);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
        read: function(req,res){
            let activated_at_id = req.params.id;
            activated_at.findById(req.params.id,{})
                .then(activated_at => {
                    if(!activated_at){
                        return res.status(404).json({
                            message: 'Activation not found'
                        });
                    }
                    res.status(200).json(activated_at);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        // PUT Request
        update: function(req, res){
            activated_at.findById(req.params.id, {})
                .then(activated_at =>{
                    if(!activated_at){
                        return res.status(404).json({
                            message: 'Activation not found'
                        });
                    }
                    activated_at
                        .update({
                        })
                        .then(() => res.status(200).json(activated_at))
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
            activated_at.findById(req.params.id)
                .then(activated_at => {
                    if (!activated_at) {
                        return res.status(400).json({
                            message: 'Activation Not Found'
                        });
                    }
                    return activated_at.destroy()
                        .then(() => res.status(200).json({
                            message: 'Activartion deleted'
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

    return activated_atController;
};