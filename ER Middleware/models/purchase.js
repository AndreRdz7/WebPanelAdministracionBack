'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var purchase = sequelize.define('purchase',
        {
            company_id: DataTypes.BIGINT,
            user_id: DataTypes.BIGINT,
            sub_total: DataTypes.DOUBLE,
            total: DataTypes.DOUBLE
        },
        {
            tableName: 'purchase'
        });

    purchase.associate = function (models)
    {
        purchase.belongsTo(models.company,
        {
            foreignKey: 'company_id'
        });
        purchase.belongsTo(models.user,
        {
            foreignKey: 'user_id'
        });
    }
    return purchase;
};