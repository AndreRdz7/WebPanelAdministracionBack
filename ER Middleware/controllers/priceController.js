const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let price = app.models.schema.price;

    let priceController = {
        index: function(req,res){
            price.findAll({})
            .then(function(price){
                winston.log('Succes at getting all prices from the BD');
                res.status(200).json(price);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            price.create({
                ticket_type_id: req.body.ticket_type_id || null,
                tour_id: req.body.tour_id || null,
                amount: req.body.amount || null
            })
            .then(newPrice => {
                winston.log('Created a new price');
                res.status(200).json(newPrice);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let price_id = req.params.id;
            price.findById(req.params.id,{})
                .then(price => {
                    if(!price){
                        return res.status(404).json({
                            message: 'Price not found'
                        });
                    }
                    res.status(200).json(price);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            price.findById(req.params.price_id, {})
                .then(price =>{
                    if(!price){
                        return res.status(404).json({
                            message: 'Price not found'
                        });
                    }
                    price
                        .update({ 
                            ticket_type_id: req.body.ticket_type_id || price.ticket_type_id,
                            tour_id: req.body.tour_id || price.tour_id,
                            amount: req.body.amount || price.amount
                        })
                        .then(() => res.status(200).json(price))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            price.findById(req.params.id)
                .then(price => {
                    if(!price){
                        return res.status(400).json({
                            message: 'Price not found'
                        });
                    }
                    return price
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Price unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//place_imageController

    return priceController;
};