const Sequelize = require('sequelize');

module.exports = function(app){
    let purchase = app.models.schema.purchase;

    let purchaseController = {
        // GET Request
        index: function(req,res){
            purchase.findAll({})
            .then(function(purchase){
                console.log('Succes at getting all purchases from the BD');
                res.status(200).json(purchase);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
        create: function(req,res){
            purchase.create({
                company_id: req.body.company_id || null,
                user_id: req.body.user_id || null,
                sub_total: req.body.sub_total || null,
                total: req.body.total || null
            })
            .then(newPurchase => {
                console.log('Created a new purchase');
                res.status(200).json(newPurchase);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
        read: function(req,res){
            let purchase_id = req.params.id;
            purchase.findById(req.params.id,{})
                .then(purchase => {
                    if(!purchase){
                        return res.status(404).json({
                            message: 'Purchase not found'
                        });
                    }
                    res.status(200).json(purchase);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        // PUT Request
        update: function(req, res){
            purchase.findById(req.params.id, {})
                .then(purchase =>{
                    if(!purchase){
                        return res.status(404).json({
                            message: 'Purchase not found'
                        });
                    }
                    purchase
                        .update({ 
                            company_id: req.body.company_id || purchase.company_id,
                            user_id: req.body.user_id || purchase.user_id,
                            sub_total: req.body.sub_total || purchase.sub_total,
                            total: req.body.total || purchase.total
                        })
                        .then(() => res.status(200).json(purchase))
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
            purchase.findById(req.params.id)
                .then(purchase => {
                    if (!purchase) {
                        return res.status(400).json({
                            message: 'Purchase Not Found'
                        });
                    }
                    return purchase.destroy()
                        .then(() => res.status(200).json({
                            message: 'Purchase deleted'
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

    return purchaseController;
};