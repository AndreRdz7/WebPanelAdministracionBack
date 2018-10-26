'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var price = sequelize.define('price',
        {
            ticket_type_id: DataTypes.BIGINT,
            tour_id: DataTypes.BIGINT,
            amount: DataTypes.DOUBLE,
        },
        {
            tableName: 'price'
        });

    price.associate = function (models)
    {
        price.belongsTo(models.ticket_type,
        {
            foreignKey: 'ticket_type_id'
        });
        price.belongsTo(models.tour,
        {
            foreignKey: 'tour_id'
        });
    }
    return price;
};