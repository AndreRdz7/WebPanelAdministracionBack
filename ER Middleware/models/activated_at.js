'use strict'

module.exports = (sequelize, DataTypes) => {
    var activated_at = sequelize.define('activated_at',{
    },{
        tableName: 'activated_at'
    });
    return activated_at;
};