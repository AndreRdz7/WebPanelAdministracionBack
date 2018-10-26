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
            tour.hasMany(models.price,{
                foreignKey: 'id'
            });
            tour.hasMany(models.bracelet,{
                foreignKey: 'tour_id'
            });
            tour.hasMany(models.tour_schedule,{
                foreignKey: 'id'
            });
            tour.hasMany(models.tour_place,{
                foreignKey: 'id'
            });
            tour.hasMany(models.bus,{
                foreignKey: 'id'
            });
            tour.hasMany(models.tour_stop,{
                foreignKey: 'id'
            });
        };
    return tour;
};