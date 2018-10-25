'use strict'

module.exports = (sequelize, DataTypes) => {
    var narrative = sequelize.define('narrative',{
        audio_path: DataTypes.STRING,
        description: DataTypes.TEXT
    },{
        tableName: 'narrative'
    });
    return narrative;
};