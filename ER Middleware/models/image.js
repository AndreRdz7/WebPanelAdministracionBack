'use strict'

module.exports = (sequelize, DataTypes) => {
    var image = sequelize.define('image',{
        image_path: DataTypes.STRING,
        description: DataTypes.TEXT
    },{
        tableName: 'image'
    });
    image.associate = function(models){
        image.hasMany(models.place_image,{
            foreignKey: 'id'
        });
    };
    return image;
};