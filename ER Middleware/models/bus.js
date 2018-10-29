'use strict'

module.exports = (sequelize, DataTypes) => {
    var bus = sequelize.define('bus', {
        tour_id: DataTypes.BIGINT,
        mural_id: DataTypes.BIGINT,
        capacity: DataTypes.INTEGER,
        sold_tickets: DataTypes.INTEGER,
        status: DataTypes.ENUM('in_service', 'out_of_service')
    }, {
        tableName: 'bus'
    });
    bus.associate = function(models){
        bus.belongsTo(models.tour,{
            foreignKey: 'tour_id',
            //as: 'tour_id'
        });
        bus.belongsTo(models.mural,{
            foreignKey: 'mural_id',
            //as: 'mural_id'
        });
    }
    return bus;
};