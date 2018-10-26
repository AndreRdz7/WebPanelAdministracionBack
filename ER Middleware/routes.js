const passport = require('passport');

module.exports = function(app){
    let narrativeController = app.controllers.narrativeController;

    //Narrative routes
    app.route('/api/narrative')
        .get(narrativeController.index)
        .post(narrativeController.create);
    app.route('/api/narrative/:id')
        .get(narrativeController.view)
        .put(narrativeController.update)
        .delete(narrativeController.delete);
};