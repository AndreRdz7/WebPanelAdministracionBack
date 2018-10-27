'use strict'

module.exports = (sequelize, DataTypes) => {
    var place_image = sequelize.define('place_image', {
        place_id: DataTypes.BIGINT,
        image_id: DataTypes.BIGINT
    }, {
        tableName: 'place_image'
    });
    place_image.associate = function(models){
        place_image.belongsTo(models.place,{
            foreignKey: 'place_id'
        });
        place_image.belongsTo(models.image,{
            foreignKey: 'image_id'
        });
    }
    return place_image;
};