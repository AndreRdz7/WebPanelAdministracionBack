'use strict'
module.exports = (sequelize, DataTypes) => 
{
    var ticket = sequelize.define('ticket',
    {
        purchase_id: DataTypes.BIGINT,
        price_id: DataTypes.BIGINT,
        client_name: DataTypes.STRING,
        client_last_name: DataTypes.STRING,
        client_age: DataTypes.INTEGER,
        tour_date: DataTypes.DATE,
        qr_code: DataTypes.STRING,
        total: DataTypes.DOUBLE
    },
    {
            tableName: 'ticket'
    });

    ticket.associate = function (models)
    {
        ticket.belongsTo(models.purchase,
        {
            foreignKey: 'purchase_id',
            //as: 'purchase_id'
        });
        ticket.belongsTo(models.price,
        {
            foreignKey: 'price_id',
            //as: 'price_id'
        });
        ticket.hasOne(models.bracelet, {
            foreignKey: 'ticket_id',
            //as: 'ticket_id'
        });
    };
    return ticket;
};