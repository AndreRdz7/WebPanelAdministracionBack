'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var schedule = sequelize.define('schedule',
        {
            date_interval_id: DataTypes.BIGINT,
            hour_interval_id: DataTypes.BIGINT
        },
        {
            tableName: 'schedule'
        });

    schedule.associate = function (models)
    {
        schedule.belongsTo(models.date_interval,
        {
            foreignKey: 'date_interval_id',
            //as: 'date_interval_id'
        });
        schedule.belongsTo(models.hour_interval,
        {
            foreignKey: 'hour_interval_id',
            //as: 'hour_interval_id'
        });
        schedule.hasMany(models.tour_schedule,{
            foreignKey: 'schedule_id',
            //as: 'schedule_id'
        })
    }
    return schedule;
};