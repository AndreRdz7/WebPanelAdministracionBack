const sequelize = require('sequelize');
const winston = require('winston');

module.exports = function (app) 
{
    let user = app.models.schema.user;

    let userController = 
    {
        index: function (req, res) 
        {
            user.findAll
            ({
                order: [[sequelize.col('name'), 'DESC']],
                include: [{ all: true }]
            })
                .then(function (users)
                {
                    winston.log('Success at getting all the users in the DB');
                    res.status(200).json(users);
                })
                .catch(err =>
                {
                    winston.error(err);
                    res.json(err);
                });
        },

        read: function (req, res) 
        {
            user.findById(req.params.id, {})
                .then(user => 
                {
                    if (!user)
                    {
                        return res.status(404).json({
                            message: 'User Not Found'
                        });
                    }
                    res.status(200).json(user);
                })
                .catch(err => {
                    res.json(err);
                })
        },

        create: function (req, res)
        {
            user.create({
                user_type: req.body.user_type || null,
                name: req.body.name || null,
                last_name: req.body.last_name || null,
                email: req.body.email || null,
                birthdate: req.body.birthdate || null,
                password: req.body.password || null,
                postal_code: req.body.postal_code || null,
                phone_number: req.body.phone_number || null
            })
                .then(async newUser => 
                {
                    winston.log('Created a new user');
                    res.status(200).json({
                        data: newUser
                    });
                })
                .catch(err => {
                    winston.error(err);
                    res.json(err);
                });
        },

        update: async function (req, res) 
        {
            user.findById(req.params.id, {})
                .then(user => {
                    if (!user) {
                        return res.status(404).json({
                            message: 'User Not Found'
                        });
                    }
                    user
                        .update({
                            user_type: req.body.user_type || user.user_type,
                            name: req.body.name || user.name,
                            last_name: req.body.last_name || user.last_name,
                            email: req.body.email || user.email,
                            birthdate: req.body.birthdate || user.birthdate,
                            password: req.body.password || user.password,
                            postal_code: req.body.postal_code || user.postal_code,
                            phone_number: req.body.phone_number || user.phone_number,
                        })
                        .then(() => {
                            res.status(200).json(user)
                        })
                        .catch(err => {
                            res.status(400).json(err);
                        })
                })
                .catch(err => {
                    res.json(err);
                })
        },
        delete: function (req, res) {
            user.findById(req.params.id)
                .then(user => {
                    if (!user) {
                        return res.status(400).json({
                            message: 'User Not Found'
                        });
                    }
                    return user.destroy()
                        .then(() => res.status(200).json({
                            message: 'User deleted'
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
    return userController;
};