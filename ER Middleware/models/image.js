'use strict'

module.exports = (sequelize, DataTypes) => {
    var image = sequelize.define('image',{
        image_path: DataTypes.STRING,
        description: DataTypes.TEXT
    },{
        tableName: 'image'
    });
    image.associate = function(models){
        image.hasOne(models.place_image,{
            foreignKey: 'image_id'
        });
    };
    return image;
};