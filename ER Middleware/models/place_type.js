'use strict'

module.exports = (sequelize, DataTypes) => {
    var place_type = sequelize.define('place_type', {
        name: DataTypes.STRING
    }, {
        tableName: 'place_type'
    });
    place_type.associate = function(models){
        place_type.hasMany(models.place, {
            foreignKey: 'id'
        });
    };
    return place_type;
};