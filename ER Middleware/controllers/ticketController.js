const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let ticket = app.models.schema.ticket;

    let ticketController = {
        index: function(req,res){
            ticket.findAll({})
            .then(function(ticket){
                winston.log('Succes at getting all tickets from the BD');
                res.status(200).json(ticket);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            ticket.create({
                purchase_id: req.body.purchase_id || null,
                place_id: req.body.place_id || null,
                client_name: req.body.client_name || null,
                client_last_name: req.body.client_last_name || null,
                client_age: req.body.client_age || null,
                tour_date: req.body.tour_date || null,
                qr_code: req.body.qr_code || null,
                total: req.body.total || null
            })
            .then(newTicket => {
                winston.log('Created a new ticket');
                res.status(200).json(newTicket);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let ticket_id = req.params.id;
            ticket.findById(req.params.id,{})
                .then(ticket => {
                    if(!ticket){
                        return res.status(404).json({
                            message: 'Ticket not found'
                        });
                    }
                    res.status(200).json(ticket);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            ticket.findById(req.params.ticket_id, {})
                .then(ticket =>{
                    if(!ticket){
                        return res.status(404).json({
                            message: 'Ticket not found'
                        });
                    }
                    ticket
                        .update({ 
                            purchase_id: req.body.purchase_id || ticket.purchase_id,
                            place_id: req.body.place_id || ticket.place_id,
                            client_name: req.body.client_name || ticket.client_name,
                            client_last_name: req.body.client_last_name || ticket.client_last_name,
                            client_age: req.body.client_age || ticket.client_age,
                            tour_date: req.body.tour_date || ticket.tour_date,
                            qr_code: req.body.qr_code || ticket.qr_code,
                            total: req.body.total || ticket.total
                        })
                        .then(() => res.status(200).json(ticket))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            ticket.findById(req.params.id)
                .then(ticket => {
                    if(!ticket){
                        return res.status(400).json({
                            message: 'Ticket not found'
                        });
                    }
                    return ticket
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Ticket unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//ticketController

    return ticketController;
};