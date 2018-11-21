'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var stop = sequelize.define('stop',
    {
        name: DataTypes.STRING,
        longitude: DataTypes.DOUBLE,
        latitude: DataTypes.DOUBLE,
        description: DataTypes.TEXT,
        image_path: DataTypes.STRING,
    },
    {
        tableName: 'stop'
    });
    stop.associate = function(models){
        stop.hasMany(models.tour_stop,{
            foreignKey: 'stop_id',
            //as: 'stop_id'
        });
    };
    return stop;
};