'use strict';
module.exports = function (sequelize, DataTypes) {
    const collection = sequelize.define('collection', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "categories",
                key: "id"
            }
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

    collection.associate = function (models) {
        collection.belongsToMany(models.card, {through:"card_collection"});
        // collection.hasMany(models.card, {as: "cards", foreignKey: "collectionId"});
        collection.belongsTo(models.category, {as: "category", foreignKey: "categoryId"});
        collection.belongsTo(models.user, {as: "creator", foreignKey: "creatorId"})
    };
    return collection;
};