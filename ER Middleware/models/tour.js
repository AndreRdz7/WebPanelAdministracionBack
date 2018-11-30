'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var tour = sequelize.define('tour',
        {
            // attributes
            name: DataTypes.STRING,
            image_path: DataTypes.STRING,
            description: DataTypes.TEXT
        },
        {
            tableName: 'tour'
        });
        // relations
        tour.associate = function(models){
            tour.hasMany(models.price,{
                foreignKey: 'tour_id',
                //as: 'tour_id'
            });
            tour.hasMany(models.bracelet, {
                foreignKey: 'tour_id',
                //as: 'tour_id'
            });
            tour.hasMany(models.tour_schedule,{
                foreignKey: 'tour_id',
                //as: 'tour_id'
            });
            tour.hasMany(models.tour_place,{
                foreignKey: 'tour_id',
                //as: 'tour_id'
            });
            tour.hasMany(models.bus,{
                foreignKey: 'tour_id',
                //as: 'tour_id'
            });
            tour.hasMany(models.tour_stop,{
                foreignKey: 'tour_id',
                //as: 'tour_id'
            });
        };
    return tour;
};