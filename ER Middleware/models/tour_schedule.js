'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var tour_schedule = sequelize.define('tour_schedule',
        {
            // attributes
            tour_id: DataTypes.BIGINT,
            schedule_id: DataTypes.BIGINT
        },
        {
            tableName: 'tour_schedule'
        });
        // relations
    tour_schedule.associate = function (models)
    {
        tour_schedule.belongsTo(models.tour,
        {
            foreignKey: 'tour_id',
            //as: 'tour_id'
        });
        tour_schedule.belongsTo(models.schedule,
        {
            foreignKey: 'schedule_id',
            //as: 'schedule_id'
        });
    }
    return tour_schedule;
};