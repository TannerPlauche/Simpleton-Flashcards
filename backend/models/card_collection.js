'use strict';
module.exports = function (sequelize, DataTypes) {
    const card_collection = sequelize.define('card_collection', {
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: "cards",
                key: "id"
            }
        },
        collectionId: {
            type: DataTypes.INTEGER,
            references: {
                model: "collections",
                key: "id"
            }
        },
    }, {
        classMethods: {}
    });


    return card_collection;
};