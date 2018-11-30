'use strict'

module.exports = (sequelize, DataTypes) => {
    var image = sequelize.define('image',{
        // attibutes
        image_path: DataTypes.STRING,
        description: DataTypes.TEXT
    },{
        tableName: 'image'
    });
    // relations
    image.associate = function(models){
        image.hasMany(models.place_image,{
            foreignKey: 'image_id',
            //as: 'image_id'
        });
    };
    return image;
};