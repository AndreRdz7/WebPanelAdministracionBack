'use strict'

module.exports = (sequelize, DataTypes) => {
    var tour_place = sequelize.define('tour_place', {
        // attributes
        tour_id: DataTypes.BIGINT,
        place_id: DataTypes.BIGINT
    }, {
        tableName: 'tour_place'
    });
    // relations
    tour_place.associate = function(models){
        tour_place.belongsTo(models.tour,{
            foreignKey: 'tour_id',
            //as: 'tour_id'
        });
        tour_place.belongsTo(models.place,{
            foreignKey: 'place_id',
            //as: 'place_id'
        });
    }
    return tour_place;
};