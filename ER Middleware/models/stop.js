'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var stop = sequelize.define('stop',
    {
        name: DataTypes.STRING,
        longitude: DataTypes.DOUBLE,
        latitude: DataTypes.DOUBLE,
        description: DataTypes.TEXT
    },
    {
        tableName: 'stop'
    });
    stop.associate = function(models){
        stop.hasOne(models.tour_stop,{
            foreignKey: 'stop_id',
            //as: 'stop_id'
        });
    };
    return stop;
};