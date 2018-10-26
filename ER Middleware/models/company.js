'use strict'
// no tiene le id serial ni los created_at y updated_at
module.exports = (sequelize, DataTypes) => {
    var company = sequelize.define('company',{
        name: DataTypes.STRING,
        full_name: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        street: DataTypes.STRING,
        postal_code: DataTypes.STRING,
        rfc: DataTypes.DOUBLE,
        ieps: DataTypes.DOUBLE,
        iva: DataTypes.DOUBLE,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE
    },{
        tableName: 'company'
    });
    company.associate = function(models){
        company.hasMany(models.purchase, {
            foreignKey: 'id'
        });
    };
    return company;
};