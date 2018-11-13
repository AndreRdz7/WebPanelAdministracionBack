const sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

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
                    console.log('Success at getting all the users in the DB');
                    res.status(200).json(users);
                })
                .catch(err =>
                {
                    console.error(err);
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
                password: bcrypt.hashSync(req.body.password, 10) || bcrypt.hashSync('secret', 10),
                postal_code: req.body.postal_code || null,
                phone_number: req.body.phone_number || null
            })
                .then(async newUser => 
                {
                    console.log('Created a new user');
                    res.status(200).json({
                        data: newUser
                    });
                })
                .catch(err => {
                    console.error(err);
                    res.json(err);
                });
        },

        update: async function (req, res) 
        {
            let newPassword = null
            if (req.body.password) {
                 newPassword = await bcrypt.hashSync(req.body.password, 10);
            }
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
                            password: newPassword || user.password,
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
        },

        login: function(req, res) {
            user.findOne({
                where: { email: req.body.email }
            })
            .then(userNow => {
                if (!userNow) {
                    console.log("no se encontro error")
                    return res.status(400).json({
                        message: `User doesn't exist`
                    });
                }

                userNow.verifyPassword(req.body.password, function(err, isMatch) {
                    if (err) {
                        console.log("hubo un error 1")
                        return res.status(500).json({
                            message: `Errory trying to verify password ${err}`
                        });
                    }

                    if (!isMatch) {
                        console.log("la contrasena NO coincide")
                        return res.status(400).json({
                            message: `Invalid credentials, password doesn't match`
                        });
                    }
                    console.log("la contrasena coincide")
                    return res.status(200).json(userNow);
                })
            })
            .catch(err => {
                console.log("hubo un error")
                console.error(err);
                res.json(err);
            });
        },
    }
    return userController;
};