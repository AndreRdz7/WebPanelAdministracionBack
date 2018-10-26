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

    return stop;
};