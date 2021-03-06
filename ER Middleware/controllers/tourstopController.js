const Sequelize = require('sequelize');

module.exports = function(app){
    let tour_stop = app.models.schema.tour_stop;

    let tour_stopController = {
        // GET Request
        index: function(req,res){
            tour_stop.findAll({})
            .then(function(tour_stop){
                console.log('Succes at getting all tour stops from the BD');
                res.status(200).json(tour_stop);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
        create: function(req,res){
            tour_stop.create({
                tour_id: req.body.tour_id || null,
                stop_id: req.body.stop_id || null
            })
            .then(newTour_stop => {
                console.log('Created a new tour stop');
                res.status(200).json(newTour_stop);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
        read: function(req,res){
            let tour_stop_id = req.params.id;
            tour_stop.findById(req.params.id,{})
                .then(tour_stop => {
                    if(!tour_stop){
                        return res.status(404).json({
                            message: 'Tour stop not found'
                        });
                    }
                    res.status(200).json(tour_stop);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        // PUT Request
        update: function(req, res){
            tour_stop.findById(req.params.id, {})
                .then(tour_stop =>{
                    if(!tour_stop){
                        return res.status(404).json({
                            message: 'Tour stop not found'
                        });
                    }
                    tour_stop
                        .update({ 
                            tour_id: req.body.tour_id || tour_stop.tour_id,
                            stop_id: req.body.stop_id || tour_stop.stop_id
                        })
                        .then(() => res.status(200).json(tour_stop))
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
            tour_stop.findById(req.params.id)
                .then(tour_stop => {
                    if (!tour_stop) {
                        return res.status(400).json({
                            message: 'Tour stop Not Found'
                        });
                    }
                    return tour_stop.destroy()
                        .then(() => res.status(200).json({
                            message: 'Tour stop deleted'
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

    return tour_stopController;
};