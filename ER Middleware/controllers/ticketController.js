const Sequelize = require('sequelize');

module.exports = function(app){
    let ticket = app.models.schema.ticket;

    let ticketController = {
        // GET Request
        index: function(req,res){
            ticket.findAll({})
            .then(function(ticket){
                console.log('Succes at getting all tickets from the BD');
                res.status(200).json(ticket);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
        create: function(req,res){
            ticket.create({
                purchase_id: req.body.purchase_id || null,
                price_id: req.body.price_id || null,
                client_name: req.body.client_name || null,
                client_last_name: req.body.client_last_name || null,
                client_age: req.body.client_age || null,
                client_genre: req.body.client_genre || null,
                tour_date: req.body.tour_date || null,
                qr_code: req.body.qr_code || null,
                total: req.body.total || null
            })
            .then(newTicket => {
                console.log('Created a new ticket');
                res.status(200).json(newTicket);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
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
        // PUT Request
        update: function(req, res){
            ticket.findById(req.params.id, {})
                .then(ticket =>{
                    if(!ticket){
                        return res.status(404).json({
                            message: 'Ticket not found'
                        });
                    }
                    ticket
                        .update({ 
                            purchase_id: req.body.purchase_id || ticket.purchase_id,
                            price_id: req.body.price_id || ticket.price_id,
                            client_name: req.body.client_name || ticket.client_name,
                            client_last_name: req.body.client_last_name || ticket.client_last_name,
                            client_age: req.body.client_age || ticket.client_age,
                            client_genre: req.body.client_genre || ticket.client_genre,
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
        // DELETE Request
        delete: function (req, res) {
            ticket.findById(req.params.id)
                .then(ticket => {
                    if (!ticket) {
                        return res.status(400).json({
                            message: 'Ticket Not Found'
                        });
                    }
                    return ticket.destroy()
                        .then(() => res.status(200).json({
                            message: 'Ticket deleted'
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

    return ticketController;
};