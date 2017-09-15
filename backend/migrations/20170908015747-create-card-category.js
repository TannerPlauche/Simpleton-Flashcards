'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('card_categories', {
            cardId: {
                type: Sequelize.UUIDv4,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: "cards",
                    key: "id"
                }
            },
            categoryID: {
                type: Sequelize.UUIDv4,
                primaryKey: true,
                allowNull: false,
                references:{
                    model: "categories",
                    key: "id"
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('card_categories');
    }
};