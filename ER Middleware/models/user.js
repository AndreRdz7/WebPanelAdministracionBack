'use strict'

const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const moment = require('moment');

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
        user.hasOne(models.purchase, {
            foreignKey: 'user_id',
            //as: 'user_id'
        });
    };

      user.prototype.verifyPassword = function(password, callback) {
        bcrypt.compare(password, this.password, function(err, isMatch) {
          if (err) {
            return callback(err);
          }
          callback(null, isMatch);
        });
      }

    return user;
}