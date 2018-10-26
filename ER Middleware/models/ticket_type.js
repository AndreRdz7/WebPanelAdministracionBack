'use strict'

module.exports = (sequelize, DataTypes) => {
    var ticket_type = sequelize.define('ticket_type',{
        name: DataTypes.STRING
    },{
        tableName: 'ticket_type'
    });
    ticket_type.associate = function(models){
        ticket_type.hasMany(models.price, {
            foreignKey: 'id'
        });
    };
    return ticket_type;
};