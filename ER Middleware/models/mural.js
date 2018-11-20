'use strict'

module.exports = (sequelize, DataTypes) => {
    var mural = sequelize.define('mural', {
        title: DataTypes.STRING,
        author_name: DataTypes.STRING,
        author_last_name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image_path: DataTypes.STRING,
    }, {
        tableName: 'mural'
    });
    mural.associate = function(models){
        mural.hasOne(models.bus, {
            foreignKey: 'mural_id',
            //as: 'mural_id'
        });
    };
    return mural;
};