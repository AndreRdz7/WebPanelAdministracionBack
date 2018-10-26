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
<<<<<<< HEAD
            tour.hasOne(models.bracelet,{
=======
            tour.hasMany(models.bracelet,{
>>>>>>> 35f989cc7804bfc03eb9f93613fabfb7eddc104c
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