'use strict'

module.exports = (sequelize, DataTypes) => {
    var bracelet = sequelize.define('bracelet', {
        ticket_id: DataTypes.BIGINT,
        tour_id: DataTypes.BIGINT,
        activated_at_id: DataTypes.BIGINT,
        status: DataTypes.ENUM('hop_on', 'hop_off')
    }, {
        tableName: 'bracelet'
    });
    bracelet.associate = function(models){
        bracelet.belongsTo(models.ticket,{
            foreignKey: 'ticket_id',
            as: 'ticket'
        });
        bracelet.belongsTo(models.tour,{
            foreignKey: 'tour_id',
            as: 'tour'
        });
        bracelet.belongsTo(models.activated_at_id,{
            foreignKey: 'activated_at_id',
            as: 'activated_at'
        });
    };
    return bracelet;
};