'use strict';
module.exports = function (sequelize, DataTypes) {
    const card = sequelize.define('card', {
        word: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: "categories",
                key: "id"
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        creatorId: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        },
    }, {
        classMethods: {}
    });

    card.associate = function(models){
        card.belongsToMany(models.category, {through:"card_category"});
        card.belongsToMany(models.collection, {through:"card_collection"});
        card.belongsTo(models.user, {as: "user", foreignKey: "creatorId"});
    };
    return card;
};