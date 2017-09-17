'use strict';
module.exports = function (sequelize, DataTypes) {
    const card_category = sequelize.define('card_category', {
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: "cards",
                key: "id"
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: "categories",
                key: "id"
            }
        },
    }, {
        classMethods: {}
    });

    card_category.associate = function(models){
    };
    return card_category;
};