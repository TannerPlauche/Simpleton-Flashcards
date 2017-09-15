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
        classMethods: {}
    });

    category.associate = function(models){
        category.belongsToMany(models["card_categories"], {as: "cards", through:"card_categories", key: "id"});
        category.hasMany(models["card_list"], {as: "lists", foreignKey: "categoryId"})
    };
    return category;
};