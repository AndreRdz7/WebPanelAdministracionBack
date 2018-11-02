const Sequelize = require('sequelize');

module.exports = function(app){
    let tour = app.models.schema.tour;

    let tourController = {
        index: function(req,res){
            tour.findAll({})
            .then(function(tour){
                console.log('Succes at getting all tours from the BD');
                res.status(200).json(tour);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            tour.create({
                name: req.body.name || null,
                image_path: req.body.image_path || null,
                description: req.body.description || null
            })
            .then(newTour => {
                console.log('Created a new tour');
                res.status(200).json(newTour);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let tour_id = req.params.id;
            tour.findById(req.params.id,{})
                .then(tour => {
                    if(!tour){
                        return res.status(404).json({
                            message: 'Tour not found'
                        });
                    }
                    res.status(200).json(tour);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            tour.findById(req.params.id, {})
                .then(tour =>{
                    if(!tour){
                        return res.status(404).json({
                            message: 'Tour not found'
                        });
                    }
                    tour
                        .update({ 
                            name: req.body.name || tour.name,
                            image_path: req.body.image_path || tour.image_path,
                            description: req.body.description || tour.description
                        })
                        .then(() => res.status(200).json(tour))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function (req, res) {
            tour.findById(req.params.id)
                .then(tour => {
                    if (!tour) {
                        return res.status(400).json({
                            message: 'Tour Not Found'
                        });
                    }
                    return tour.destroy()
                        .then(() => res.status(200).json({
                            message: 'Tour deleted'
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

    return tourController;
};