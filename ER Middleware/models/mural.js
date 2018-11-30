'use strict'

module.exports = (sequelize, DataTypes) => {
    var mural = sequelize.define('mural', {
        // attributes
        title: DataTypes.STRING,
        author_name: DataTypes.STRING,
        author_last_name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image_path: DataTypes.STRING,
    }, {
        tableName: 'mural'
    });
    // relations
    mural.associate = function(models){
        mural.hasMany(models.bus, {
            foreignKey: 'mural_id',
            //as: 'mural_id'
        });
    };
    return mural;
};