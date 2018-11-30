'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var purchase = sequelize.define('purchase',
        {
            // attributes
            company_id: DataTypes.BIGINT,
            user_id: DataTypes.BIGINT,
            sub_total: DataTypes.DOUBLE,
            total: DataTypes.DOUBLE
        },
        {
            tableName: 'purchase'
        });
        // relations
    purchase.associate = function (models)
    {
        purchase.belongsTo(models.company,
        {
            foreignKey: 'company_id',
            //as: 'company_id'
        });
        purchase.belongsTo(models.user,
        {
            foreignKey: 'user_id',
            //as: 'user_id'
        });
        purchase.hasMany(models.ticket, {
            foreignKey: 'purchase_id',
            //as: 'purchase_id'
        });
    };
    return purchase;
};