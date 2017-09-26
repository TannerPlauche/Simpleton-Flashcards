'use strict';
module.exports = function (sequelize, DataTypes) {
    const category = sequelize.define('category', {
        letter: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        classMethods: {}
    });

    category.associate = function(models){
        category.belongsToMany(models.card, {through:"card_category"});
        category.hasMany(models.collection, {as: "lists", foreignKey: "categoryId"})
    };
    return category;
};