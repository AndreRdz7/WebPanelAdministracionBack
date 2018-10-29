'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var tour_stop = sequelize.define('tour_stop',
        {
            tour_id: DataTypes.BIGINT,
            stop_id: DataTypes.BIGINT
        },
        {
            tableName: 'tour_stop'
        });

    tour_stop.associate = function (models)
    {
        tour_stop.belongsTo(models.tour,
        {
            foreignKey: 'tour_id',
            //as: 'tour_id'
        });
        tour_stop.belongsTo(models.stop,
        {
            foreignKey: 'stop_id',
            //as: 'stop_id'
        });
    }
    return tour_stop;
};