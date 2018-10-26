'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var tour = sequelize.define('tour',
        {
            name: DataTypes.STRING,
            image_path: DataTypes.STRING,
            description: DataTypes.TEXT
        },
        {
            tableName: 'tour'
        });
        tour.associate = function(models){
            tour.hasOne(models.price,{
                foreignKey: 'tour_id'
            });
            tour.hasOne(models.tour_schedule,{
                foreignKey: 'tour_id'
            });
            tour.hasOne(models.tour_place,{
                foreignKey: 'tour_id'
            });
            tour.hasOne(models.bus,{
                foreignKey: 'tour_id'
            });
            tour.hasOne(models.tour_stop,{
                foreignKey: 'tour_id'
            });
        };
    return tour;
};