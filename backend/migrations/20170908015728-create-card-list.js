'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('card_lists', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.UUIDv4
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            imgUrl: Sequelize.STRING,
            categoryId: {
                type: Sequelize.UUIDv4,
                allowNull: false,
                references: {
                    model: "categories",
                    key: "id"
                }
            },
            creatorId: {
                type: Sequelize.UUIDV4,
                references: {
                    model: "users",
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
        return queryInterface.dropTable('card_lists');
    }
};