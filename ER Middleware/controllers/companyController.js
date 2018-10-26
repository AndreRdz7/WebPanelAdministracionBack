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
                audio_path: req.body.audio_path || null,
                description: req.body.description || null
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
                            audio_path: req.body.audio_path || company.audio_path,
                            description: req.body.description || company.description
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