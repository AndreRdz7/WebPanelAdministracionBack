'use strict'

module.exports = (sequelize, DataTypes) => {
    var ticket_type = sequelize.define('ticket_type',{
        name: DataTypes.STRING
    },{
        tableName: 'ticket_type'
    });
    ticket_type.associate = function(models){
        ticket_type.hasMany(models.price, {
            foreignKey: 'ticket_type_id',
            //as: 'ticket_type_id'
        });
    };
    return ticket_type;
};