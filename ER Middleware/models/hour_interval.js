'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var hour_interval = sequelize.define('hour_interval',
    {
        start_time: DataTypes.TIME,
        end_time: DataTypes.TIME,
        frequency: DataTypes.TIME
    },
    {
        tableName: 'hour_interval'
    });

    return hour_interval;
};