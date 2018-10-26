'use strict'
module.exports = (sequelize, DataTypes) => 
{
    var user = sequelize.define('user', 
    {
        user_type: DataTypes.ENUM('administrator', 'client'),
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        password: DataTypes.STRING,
        postal_code: DataTypes.STRING,
        phone_number: DataTypes.STRING
    }, 
    {
        tableName: 'user'
    });
    user.associate = function(models){
        user.belongsTo(models.purchase, {
            foreignKey: 'user_id'
        });
    };
    return user;
}