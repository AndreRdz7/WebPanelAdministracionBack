'uso strict'

module.exports = (sequelize, DataTypes) => {
    var bus = sequelize.define('bus', {
        tour_id: DataTypes.BIGINT,
        mural_id: DataTypes.BIGINT,
        capacity: DataTypes.INTEGER,
        sold_tickets: DataTypes.INTEGER,
        status: DataTypes.ENUM
    }, {
        tableName: 'bus'
    });
    bus.associate = function(models){
        tour_id.belongsTo(models.tour,{
            foreignKey: 'tour_id'
        });
        mural_id.belongsTo(models.mural,{
            foreignKey: 'mural_id'
        });
    }
    return bus;
};