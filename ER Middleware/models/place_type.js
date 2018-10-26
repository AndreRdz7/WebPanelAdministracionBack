'use strict'

module.exports = (sequelize, DataTypes) => {
    var place_type = sequelize.define('place_type', {
        name: DataTypes.STRING
    }, {
        tableName: 'place_type'
    });
    return place_type;
};