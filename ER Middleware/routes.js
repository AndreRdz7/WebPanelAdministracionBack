
module.exports = function(app){
    let companyController = app.controllers.companyController;
    let ticket_typeController = app.controllers.tickettypeController;
    let muralController = app.controllers.muralController;
    let place_typeController = app.controllers.placetypeController;
    let purchaseController = app.controllers.purchaseController;
    let priceController = app.controllers.priceController;
    let userController = app.controllers.userController;
    let placeController = app.controllers.placeController;
    let ticketController = app.controllers.ticketController;
    let tourController = app.controllers.tourController;
    let busController = app.controllers.busController;
    let narrativeController = app.controllers.narrativeController;
    let braceletController = app.controllers.braceletController;
    let tour_scheduleController = app.controllers.tourscheduleController;
    let date_intervalController = app.controllers.dateintervalController;
    let tour_placeController = app.controllers.tourplaceController;
    let place_imageController = app. controllers.placeimageController;
    let activated_atController = app.controllers.activatedatController;
    let tour_stopController = app.controllers.tourstopController;
    let stopController = app.controllers.stopController;
    let scheduleController = app.controllers.scheduleController;
    let hour_intervalController = app.controllers.hourintervalController;
    let imageController = app.controllers.imageController;
    
    
    
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
    
    //Purchase  routes
    app.route('/api/purchase')
        .get(purchaseController.index)
        .post(purchaseController.create);
    app.route('/api/purchase/:id')
        .get(purchaseController.read)
        .put(purchaseController.update)
        .delete(purchaseController.delete);

    //Price routes
    app.route('/api/price')
        .get(priceController.index)
        .post(priceController.create);
    app.route('/api/price/:id')
        .get(priceController.read)
        .put(priceController.update)
        .delete(priceController.delete);
    
    //Place routes
    app.route('/api/place')
        .get(placeController.index)
        .post(placeController.create);
    app.route('/api/place/:id')
        .get(placeController.read)
        .put(placeController.update)
        .delete(placeController.delete);
    
    //Tour routes
    app.route('/api/ticket')
        .get(ticketController.index)
        .post(ticketController.create);
    app.route('/api/ticket/:id')
        .get(ticketController.read)
        .put(ticketController.update)
        .delete(ticketController.delete);
    
    //Tour routes
    app.route('/api/tour')
        .get(tourController.index)
        .post(tourController.create);
    app.route('/api/tour/:id')
        .get(tourController.read)
        .put(tourController.update)
        .delete(tourController.delete);

    //Bus routes
    app.route('/api/bus')
        .get(busController.index)
        .post(busController.create);
    app.route('/api/bus/:id')
        .get(busController.read)
        .put(busController.update)
        .delete(busController.delete);

    //Narrative routes
    app.route('/api/narrative')
        .get(narrativeController.index)
        .post(narrativeController.create);
    app.route('/api/narrative/:id')
        .get(narrativeController.read)
        .put(narrativeController.update)
        .delete(narrativeController.delete);

    //Bracelet routes
    app.route('/api/bracelet')
        .get(braceletController.index)
        .post(braceletController.create);
    app.route('/api/bracelet/:id')
        .get(braceletController.read)
        .put(braceletController.update)
        .delete(braceletController.delete);
    
    //Tour schedule routes
    app.route('/api/tour_schedule')
        .get(tour_scheduleController.index)
        .post(tour_scheduleController.create);
    app.route('/api/tour_schedule/:id')
        .get(tour_scheduleController.read)
        .put(tour_scheduleController.update)
        .delete(tour_scheduleController.delete);
    
    //Date interval routes
    app.route('/api/date_interval')
        .get(date_intervalController.index)
        .post(date_intervalController.create);
    app.route('/api/date:_interval/:id')
        .get(date_intervalController.read)
        .put(date_intervalController.update)
        .delete(date_intervalController.delete);

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
    
    //Tour stop routes
    app.route('/api/tour_stop')
        .get(tour_stopController.index)
        .post(tour_stopController.create);
    app.route('/api/tour_Stop/:id')
        .get(tour_stopController.read)
        .put(tour_stopController.update)
        .delete(tour_stopController.delete);

    //Stop routes
    app.route('/api/stop')
        .get(stopController.index)
        .post(stopController.create);
    app.route('/api/stop/:id')
        .get(stopController.read)
        .put(stopController.update)
        .delete(stopController.delete);

    //Schedule routes
    app.route('/api/schedule')
        .get(scheduleController.index)
        .post(scheduleController.create);
    app.route('/api/schedule/:id')
        .get(scheduleController.read)
        .put(scheduleController.update)
        .delete(scheduleController.delete);
    
    //Hour interval routes
    app.route('/api/hour_interval')
        .get(hour_intervalController.index)
        .post(hour_intervalController.create);
    app.route('/api/hour_interval/:id')
        .get(hour_intervalController.read)
        .put(hour_intervalController.update)
        .delete(hour_intervalController.delete);
    
    //Image routes
    app.route('/api/image')
        .get(imageController.index)
        .post(imageController.create);
    app.route('/api/image/:id')
        .get(imageController.read)
        .put(imageController.update)
        .delete(imageController.delete);

    //User routes
    app.route('/api/user')
        .get(userController.index)
        .post(userController.create);
    app.route('/api/user/:id')
        .get(userController.read)
        .put(userController.update)
        .delete(userController.delete);
    
};