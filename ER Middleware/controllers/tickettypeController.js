const Sequelize = require('sequelize');

module.exports = function(app){
    let ticket_type = app.models.schema.ticket_type;

    let ticket_typeController = {
        index: function(req,res){
            ticket_type.findAll({})
            .then(function(ticket_type){
                console.log('Succes at getting all ticket types from the BD');
                res.status(200).json(ticket_type);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            ticket_type.create({
                name: req.body.name || null
            })
            .then(newTicket_type => {
                console.log('Created a new ticket type');
                res.status(200).json(newTicket_type);
            })
            .catch(err => {
                console.error(err);
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
            ticket_type.findById(req.params.id, {})
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
        delete: function (req, res) {
            ticket_type.findById(req.params.id)
                .then(ticket_type => {
                    if (!ticket_type) {
                        return res.status(400).json({
                            message: 'Ticket type Not Found'
                        });
                    }
                    return ticket_type.destroy()
                        .then(() => res.status(200).json({
                            message: 'Ticket type deleted'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        }
    }//ticket_typeController

    return ticket_typeController;
};