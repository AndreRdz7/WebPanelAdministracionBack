const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let ticket_type = app.models.schema.ticket_type;

    let ticket_typeController = {
        index: function(req,res){
            ticket_type.findAll({})
            .then(function(ticket_type){
                winston.log('Succes at getting all ticket types from the BD');
                res.status(200).json(ticket_type);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            ticket_type.create({
                name: req.body.name || null
            })
            .then(newTicket_type => {
                winston.log('Created a new ticket type');
                res.status(200).json(newTicket_type);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let ticket_type_id = req.params.id;
            ticket_type.findById(req.params.id,{})
                .then(ticket_type => {
                    if(!ticket_type){
                        return res.status(404).json({
                            message: 'Ticket type not found'
                        });
                    }
                    res.status(200).json(ticket_type);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            ticket_type.findById(req.params.ticket_type_id, {})
                .then(ticket_type =>{
                    if(!ticket_type){
                        return res.status(404).json({
                            message: 'Ticket type not found'
                        });
                    }
                    ticket_type
                        .update({ 
                            name: req.body.name || ticket_type.name
                        })
                        .then(() => res.status(200).json(ticket_type))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            ticket_type.findById(req.params.id)
                .then(ticket_type => {
                    if(!ticket_type){
                        return res.status(400).json({
                            message: 'Ticket type not found'
                        });
                    }
                    return ticket_type
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Ticket type unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//ticket_typeController

    return ticket_typeController;
};