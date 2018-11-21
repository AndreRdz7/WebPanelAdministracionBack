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
    hour_interval.associate = function(models){
        hour_interval.hasMany(models.schedule,{
            foreignKey: 'hour_interval_id',
            //as: 'hour_interval_id'
        });
    };
    return hour_interval;
};