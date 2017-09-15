'use strict';
module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define('user', {
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
        user.hasMany(models["card_list"], {as: "lists", foreignKey: "creatorId"});
    };
    return user;
};