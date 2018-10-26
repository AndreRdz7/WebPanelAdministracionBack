'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var date_interval = sequelize.define('date_interval',
    {
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        status: DataTypes.ENUM('in_service', 'out_of_service')
    },
    {
        tableName: 'date_interval'
    });

    return date_interval;
};