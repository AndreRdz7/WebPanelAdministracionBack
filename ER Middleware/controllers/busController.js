const Sequelize = require('sequelize');

module.exports = function(app){
    let bus = app.models.schema.bus;

    let busController = {
        // GET Request
        index: function(req,res){
            bus.findAll({})
            .then(function(bus){
                console.log('Succes at getting all buses from the BD');
                res.status(200).json(bus);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
        create: function(req,res){
            bus.create({
                tour_id: req.body.tour_id || null,
                mural_id: req.body.mural_id || null,
                capacity: req.body.capacity || null,
                sold_tickets: req.body.sold_tickets || null,
                status: req.body.status || null
            })
            .then(newBus => {
                console.log('Created a new bus');
                res.status(200).json(newBus);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
        read: function(req,res){
            let bus_id = req.params.id;
            bus.findById(req.params.id,{})
                .then(bus => {
                    if(!bus){
                        return res.status(404).json({
                            message: 'Bus not found'
                        });
                    }
                    res.status(200).json(bus);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        // PUT Request
        update: function(req, res){
            bus.findById(req.params.id, {})
                .then(bus =>{
                    if(!bus){
                        return res.status(404).json({
                            message: 'Bus not found'
                        });
                    }
                    bus
                        .update({ 
                            tour_id: req.body.tour_id || bus.tour_id,
                            mural_id: req.body.mural_id || bus.mural_id,
                            capacity: req.body.capacity || bus.capacity,
                            sold_tickets: req.body.sold_tickets || bus.sold_tickets,
                            status: req.body.status || bus.status
                        })
                        .then(() => res.status(200).json(bus))
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
            bus.findById(req.params.id)
                .then(bus => {
                    if (!bus) {
                        return res.status(400).json({
                            message: 'Bus Not Found'
                        });
                    }
                    return bus.destroy()
                        .then(() => res.status(200).json({
                            message: 'Bus deleted'
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

    return busController;
};