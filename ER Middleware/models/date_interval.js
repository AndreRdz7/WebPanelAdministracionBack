'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var date_interval = sequelize.define('date_interval',
    {
        // attributes
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        status: DataTypes.ENUM('in_service', 'out_of_service')
    },
    {
        tableName: 'date_interval'
    });
    // relationsS
    date_interval.associate = function(models){
        date_interval.hasMany(models.schedule, {
            foreignKey: 'date_interval_id',
            //as: 'date_interval_id'
        })
    }
    return date_interval;
};