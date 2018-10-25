'use strict'

module.exports = (sequelize, DataTypes) => {
    var image = sequelize.define('image',{
        image_path: DataTypes.STRING,
        description: DataTypes.TEXT
    },{
        tableName: 'image'
    });
    return image;
};