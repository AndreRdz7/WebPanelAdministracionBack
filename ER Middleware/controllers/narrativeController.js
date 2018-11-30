const Sequelize = require('sequelize');

module.exports = function(app){
    let narrative = app.models.schema.narrative;

    let narrativeController = {
        // GET Request
        index: function(req,res){
            narrative.findAll({})
            .then(function(narrative){
                console.log('Succes at getting all narratives from the BD');
                res.status(200).json(narrative);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            })
        },
        // POST Request
        create: function(req,res){
            narrative.create({
                audio_path: req.body.audio_path || null,
                description: req.body.description || null
            })
            .then(newNarrative => {
                console.log('Created a new narrative');
                res.status(200).json(newNarrative);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
        },
        // GET (single) Request
        read: function(req,res){
            let narrative_id = req.params.id;
            narrative.findById(req.params.id,{})
                .then(narrative => {
                    if(!narrative){
                        return res.status(404).json({
                            message: 'Narrative not found'
                        });
                    }
                    res.status(200).json(narrative);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        // PUT Request
        update: function(req, res){
            narrative.findById(req.params.id, {})
                .then(narrative =>{
                    if(!narrative){
                        return res.status(404).json({
                            message: 'Narrative not found'
                        });
                    }
                    narrative
                        .update({
                            audio_path: req.body.audio_path || narrative.audio_path,
                            description: req.body.description || narrative.description
                        })
                        .then(() => res.status(200).json(narrative))
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
            narrative.findById(req.params.id)
                .then(narrative => {
                    if (!narrative) {
                        return res.status(400).json({
                            message: 'Narrative Not Found'
                        });
                    }
                    return narrative.destroy()
                        .then(() => res.status(200).json({
                            message: 'Narrative deleted'
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

    return narrativeController;
};