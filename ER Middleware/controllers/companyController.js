const Sequelize = require('sequelize');

module.exports = function(app){
    let company = app.models.schema.company;

    let companyController = {
        // GET Request
        index: function(req,res){
            company.findAll({})
            .then(function(company){
                console.log('Succes at getting all companies from the BD');
                res.status(200).json(company);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
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
                longitude: req.body.longitude || null
            })
            .then(newCompany => {
                console.log('Created a new company');
                res.status(200).json(newCompany);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
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
        // PUT request
        update: function(req, res){
            company.findById(req.params.id, {})
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
                            longitude: req.body.longitude || company.longitude
                            
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
        // DELETE Request
        delete: function (req, res) {
            company.findById(req.params.id)
                .then(company => {
                    if (!company) {
                        return res.status(400).json({
                            message: 'Company Not Found'
                        });
                    }
                    return company.destroy()
                        .then(() => res.status(200).json({
                            message: 'Company deleted'
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

    return companyController;
};