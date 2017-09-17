'use strict';
module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
    }, {

    });

    user.associate = function(models){
        user.hasMany(models.card, {as: "cards", foreignKey: "creatorId"});
        user.hasMany(models.collection, {as: "collections", foreignKey: "creatorId"});
    };
    return user;
};