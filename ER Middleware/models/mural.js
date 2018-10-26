'use strict'

module.exports = (sequelize, DataTypes) => {
    var mural = sequelize.define('mural', {
        title: DataTypes.STRING,
        author_name: DataTypes.STRING,
        author_last_name: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {
        tableName: 'mural'
    });
    mural.associate = function(models){
        mural.hasMany(models.bus, {
            foreignKey: 'id'
        });
    };
    return mural;
};