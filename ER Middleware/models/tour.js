'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var tour = sequelize.define('tour',
        {
            name: DataTypes.STRING,
            image_path: DataTypes.STRING,
            description: DataTypes.TEXT
        },
        {
            tableName: 'tour'
        });

    return tour;
};