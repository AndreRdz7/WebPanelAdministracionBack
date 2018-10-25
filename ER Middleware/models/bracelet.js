'uso strict'

module.exports = (sequelize, DataTypes) => {
    var bracelet = sequelize.define('bracelet', {
        ticket_id: DataTypes.BIGINT,
        tour_id: DataTypes.BIGINT,
        activated_at_id: DataTypes.BIGINT,
        status: DataTypes.ENUM
    }, {
        tableName: 'bracelet'
    });
    Tour_place.associate = function(models){
        ticket_id.belongsTo(models.ticket,{
            foreignKey: 'ticket_id'
        });
        tour_id.belongsTo(models.tour,{
            foreignKey: 'tour_id'
        });
        activated_at_id.belongsTo(models.activated_at_id,{
            foreignKey: 'activated_at_id'
        });
    }
    return bracelet;
};