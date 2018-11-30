'use strict'

module.exports = (sequelize, DataTypes) => {
    var narrative = sequelize.define('narrative',{
        // attibutes
        audio_path: DataTypes.STRING,
        description: DataTypes.TEXT,
    },{
        tableName: 'narrative'
    });
    // relations 
    narrative.associate = function(models){
        narrative.hasMany(models.place,{
            foreignKey: 'narrative_id',
            //as: 'narrative_id'
        });
    };
    return narrative;
};