const Sequelize = require('sequelize');

module.exports = function(app){
    let date_interval = app.models.schema.date_interval;

    let date_intervalController = {
        index: function(req,res){
            date_interval.findAll({})
            .then(function(date_interval){
                console.log('Succes at getting all date intervals from the BD');
                res.status(200).json(date_interval);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            date_interval.create({
                start_date: req.body.start_date || null,
                end_date: req.body.end_date || null,
                status: req.body.status || null
            })
            .then(newDate_interval => {
                console.log('Created a new date interval');
                res.status(200).json(newDate_interval);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let date_interval_id = req.params.id;
            date_interval.findById(req.params.id,{})
                .then(date_interval => {
                    if(!date_interval){
                        return res.status(404).json({
                            message: 'Date interval not found'
                        });
                    }
                    res.status(200).json(date_interval);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            date_interval.findById(req.params.id, {})
                .then(date_interval =>{
                    if(!date_interval){
                        return res.status(404).json({
                            message: 'Date interval not found'
                        });
                    }
                    date_interval
                        .update({ 
                            start_date: req.body.start_date || date_interval.start_date,
                            end_date: req.body.end_date || date_interval.end_date,
                            status: req.body.status || date_interval.status
                        })
                        .then(() => res.status(200).json(date_interval))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function (req, res) {
            date_interval.findById(req.params.id)
                .then(date_interval => {
                    if (!date_interval) {
                        return res.status(400).json({
                            message: 'Date interval Not Found'
                        });
                    }
                    return date_interval.destroy()
                        .then(() => res.status(200).json({
                            message: 'Date interval deleted'
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

    return date_intervalController;
};