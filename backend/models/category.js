'use strict';
module.exports = function (sequelize, DataTypes) {
    var category = sequelize.define('category', {
        letter: {
            type: DataTypes.CHAR,
            allowNull: false,
            unique: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return category;
};