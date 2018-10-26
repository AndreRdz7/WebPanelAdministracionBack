const passport = require('passport');

module.exports = function(app){
    let userController = app.controllers.userController;
    let narrativeController = app.controllers.narrativeController;

    //User routes
    app.route('/api/user')
        .get(userController.index)
        .post(userController.register);
    app.route('/api/user/:id')
        .get(userController.view)
        .put(userController.update)
        .delete(userController.delete);

    //Narrative routes
    app.route('/api/narrative')
        .get(narrativeController.index)
        .post(narrativeController.create);
    app.route('/api/narrative/:id')
        .get(narrativeController.view)
        .put(narrativeController.update)
        .delete(narrativeController.delete);
};