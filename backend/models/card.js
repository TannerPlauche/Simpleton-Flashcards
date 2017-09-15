'use strict';
module.exports = function (sequelize, DataTypes) {
    var card = sequelize.define('card', {
        word: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // category: {
        //     type: DataTypes.UUIDV4,
        //     references: {
        //         model: "categories",
        //         key: "id"
        //     }
        // },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        creator: {
            type: DataTypes.UUIDV4,
            references: {
                model: "users",
                key: "id"
            }
        },
    }, {
        classMethods: {}
    });

    card.associate = function(models){
        card.belongsToMany(models["card_categories"], {as: "categories", through:"card_categories", key: "id"});
        card.belongsToMany(models.user, {as: "categories", key: "id"});
        card.belongsToMany(models["card_categories"], {as: "categories", key: "id"});
    };
    return card;
};