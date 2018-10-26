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
        .get(narrativeController.read)
        .put(narrativeController.update)
        .delete(narrativeController.delete);

    //Company routes
    app.route('/api/company')
        .get(companyController.index)
        .post(companyController.create);
    app.route('/api/company/:id')
        .get(companyController.read)
        .put(companyController.update)
        .delete(companyController.delete);

    //Ticket type routes
    app.route('/api/ticket_type')
        .get(ticket_typeController.index)
        .post(ticket_typeController.create);
    app.route('/api/ticket_type/:id')
        .get(ticket_typeController.read)
        .put(ticket_typeController.update)
        .delete(ticket_typeController.delete);

    //Mural routes
    app.route('/api/mural')
        .get(muralController.index)
        .post(muralController.create);
    app.route('/api/mural/:id')
        .get(muralController.read)
        .put(muralController.update)
        .delete(muralController.delete);

    //Place type routes
    app.route('/api/place_type')
        .get(place_typeController.index)
        .post(place_typeController.create);
    app.route('/api/place_type/:id')
        .get(place_typeController.read)
        .put(place_typeController.update)
        .delete(place_typeController.delete);

    //Bus routes
    app.route('/api/bus')
        .get(busController.index)
        .post(busController.create);
    app.route('/api/bus/:id')
        .get(busController.read)
        .put(busController.update)
        .delete(busController.delete);

    //Bracelet routes
    app.route('/api/bracelet')
        .get(braceletController.index)
        .post(braceletController.create);
    app.route('/api/bracelet/:id')
        .get(braceletController.read)
        .put(braceletController.update)
        .delete(braceletController.delete);

    //Tour place routes
    app.route('/api/tour_place')
        .get(tour_placeController.index)
        .post(tour_placeController.create);
    app.route('/api/tour_place/:id')
        .get(tour_placeController.read)
        .put(tour_placeController.update)
        .delete(tour_placeController.delete);

    //Place image routes
    app.route('/api/place_image')
        .get(place_imageController.index)
        .post(place_imageController.create);
    app.route('/api/place_image/:id')
        .get(place_imageController.read)
        .put(place_imageController.update)
        .delete(place_imageController.delete);

    //Activated at routes
    app.route('/api/activated_at')
        .get(activated_atController.index)
        .post(activated_atController.create);
    app.route('/api/activated_at/:id')
        .get(activated_atController.read)
        .put(activated_atController.update)
        .delete(activated_atController.delete);

    //Image routes
    app.route('/api/image')
        .get(imageController.index)
        .post(imageController.create);
    app.route('/api/image/:id')
        .get(imageController.read)
        .put(imageController.update)
        .delete(imageController.delete);
        
};