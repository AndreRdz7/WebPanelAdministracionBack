'use strict'

module.exports = (sequelize, DataTypes) => {
    var ticket_type = sequelize.define('ticket_type',{
        name: DataTypes.STRING
    },{
        tableName: 'ticket_type'
    });
    return ticket_type;
};