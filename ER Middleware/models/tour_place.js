'uso strict'

module.exports = (sequelize, DataTypes) => {
    var tour_place = sequelize.define('tour_place', {
        tour_id: DataTypes.BIGINT,
        place_id: DataTypes.BIGINT
    }, {
        tableName: 'tour_place'
    });
    tour_place.associate = function(models){
        tour_place.belongsTo(models.tour,{
            foreignKey: 'tour_id'
        });
        tour_place.belongsTo(models.place,{
            foreignKey: 'place_id'
        });
    }
    return tour_place;
};