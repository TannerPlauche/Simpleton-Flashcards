'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('cards', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.UUIDV4
            },
            word: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            category: {
                type: Sequelize.UUIDV4,
                references: {
                    model: "categories",
                    key: "id"
                }
            },
            image: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            creator: {
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
        return queryInterface.dropTable('cards');
    }
};