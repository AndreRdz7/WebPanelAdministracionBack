'use strict'
module.exports = (sequelize, DataTypes) =>
{
    var place = sequelize.define('place',
        {
            place_type_id: DataTypes.BIGINT,
            narrative_id: DataTypes.BIGINT,
            name: DataTypes.STRING,
            longitude: DataTypes.DOUBLE,
            latitude: DataTypes.DOUBLE,
            description: DataTypes.TEXT
        },
        {
            tableName: 'place'
        });

    place.associate = function (models)
    {
        place.belongsTo(models.place_type,
        {
            foreignKey: 'place_type_id'
        });
        place.belongsTo(models.narrative,
        {
            foreignKey: 'narrative_id'
        });
    }
    return place;
};