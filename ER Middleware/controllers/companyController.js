const Sequelize = require('sequelize');
const winston = require('winston');

module.exports = function(app){
    let company = app.models.schema.company;

    let companyController = {
        index: function(req,res){
            company.findAll({})
            .then(function(company){
                winston.log('Succes at getting all company from the BD');
                res.status(200).json(company);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            })
        },
        create: function(req,res){
            company.create({
                name: req.body.name || null,
                full_name: req.body.full_name || null,
                phone_number: req.body.phone_number || null,
                street: req.body.street || null,
                postal_code: req.body.postal_code || null,
                rfc: req.body.rfc || null,
                ieps: req.body.ieps || null,
                iva: req.body.iva || null,
                latitude: req.body.latitude || null,
                longitud: req.body.longitud || null
            })
            .then(newCompany => {
                winston.log('Created a new company');
                res.status(200).json(newCompany);
            })
            .catch(err => {
                winston.error(err);
                res.json(err);
            });
        },
        read: function(req,res){
            let company_id = req.params.id;
            company.findById(req.params.id,{})
                .then(company => {
                    if(!company){
                        return res.status(404).json({
                            message: 'Company not found'
                        });
                    }
                    res.status(200).json(company);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        update: function(req, res){
            company.findById(req.params.company_id, {})
                .then(company =>{
                    if(!company){
                        return res.status(404).json({
                            message: 'Company not found'
                        });
                    }
                    company
                        .update({ 
                            name: req.body.name || company.name,
                            full_name: req.body.full_name || company.full_name,
                            phone_number: req.body.phone_number || company.phone_number,
                            street: req.body.street || company.street,
                            postal_code: req.body.postal_code || company.postal_code,
                            rfc: req.body.rfc || company.rfc,
                            ieps: req.body.ieps || company.ieps,
                            iva: req.body.iva || company.iva,
                            latitude: req.body.latitude || company.latitude,
                            longitud: req.body.longitud || company.longitud
                            
                        })
                        .then(() => res.status(200).json(company))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function(req,res){
            company.findById(req.params.id)
                .then(company => {
                    if(!company){
                        return res.status(400).json({
                            message: 'Company not found'
                        });
                    }
                    return company
                        .update({
                            active: false
                        })
                        .then(() => res.status(200).json({
                            message: 'Company unactive'
                        }))
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
        }
    }//companyController

    return companyController;
};