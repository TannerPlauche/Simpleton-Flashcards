'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('card_collections', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            cardId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "cards",
                    key: "id"
                }
            },
            listId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references:{
                    model: "lists",
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
        return queryInterface.dropTable('card_collections');
    }
};