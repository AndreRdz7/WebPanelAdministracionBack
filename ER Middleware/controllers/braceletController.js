const Sequelize = require('sequelize');

module.exports = function(app){
    let bracelet = app.models.schema.bracelet;

    let braceletController = {
        index: function(req,res){
            bracelet.findAll({})
            .then(function(bracelet){
                console.log('Succes at getting all bracelets from the BD');
                res.status(200).json(bracelet);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            bracelet.create({
                ticket_id: req.body.ticket_id || null,
                tour_id: req.params.tour_id || null,
                activated_at_id: req.body.activated_at_id || null,
                status: req.body.status || null
            })
            .then(newBracelet => {
                console.log('Created a new bracelet');
                res.status(200).json(newBracelet);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let bracelet_id = req.params.id;
            bracelet.findById(req.params.id,{})
                .then(bracelet => {
                    if(!bracelet){
                        return res.status(404).json({
                            message: 'Bracelet not found'
                        });
                    }
                    res.status(200).json(bracelet);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            bracelet.findById(req.params.id, {})
                .then(bracelet =>{
                    if(!bracelet){
                        return res.status(404).json({
                            message: 'Bracelet not found'
                        });
                    }
                    bracelet
                        .update({ 
                            ticket_id: req.body.ticket_id || bracelet.ticket_id,
                            tour_id: req.params.tour_id || bracelet.tour_id,
                            activated_at_id: req.body.activated_at_id || bracelet.activated_at_id,
                            status: req.body.status || bracelet.status
                        })
                        .then(() => res.status(200).json(bracelet))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function (req, res) {
            bracelet.findById(req.params.id)
                .then(bracelet => {
                    if (!bracelet) {
                        return res.status(400).json({
                            message: 'Bracelet Not Found'
                        });
                    }
                    return bracelet.destroy()
                        .then(() => res.status(200).json({
                            message: 'Bracelet deleted'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        }
    }//braceltController

    return braceletController;
};