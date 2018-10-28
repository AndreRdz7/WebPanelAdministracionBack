'use strict'

module.exports = (sequelize, DataTypes) => {
    var activated_at = sequelize.define('activated_at',{
    },{
        tableName: 'activated_at'
    });
    activated_at.associate = function(models){
        activated_at.belongsTo(models.bracelet,{
            foreignKey: 'activated_at_id',
            as: 'activated_at'
        });
    };
    return activated_at;
};