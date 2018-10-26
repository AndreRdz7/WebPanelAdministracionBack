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
        stop.hasMany(models.tour_stop,{
            foreignKey: 'id'
        });
    };
    return stop;
};