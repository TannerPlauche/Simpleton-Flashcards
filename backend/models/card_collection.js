'use strict';
module.exports = function (sequelize, DataTypes) {
    const card_list = sequelize.define('card_list', {
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: "cards",
                key: "id"
            }
        },
        listId: {
            type: DataTypes.INTEGER,
            references: {
                model: "lists",
                key: "id"
            }
        },
    }, {
        classMethods: {}
    });


    return card_list;
};