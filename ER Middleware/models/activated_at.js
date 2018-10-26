'use strict'

module.exports = (sequelize, DataTypes) => {
    var activated_at = sequelize.define('activated_at',{
    },{
        tableName: 'activated_at'
    });
    activated_at.associate = function(models){
        activated_at.hasOne(models.bracelet,{
            foreignKey: 'activated_at_id'
        });
    };
    return activated_at;
};