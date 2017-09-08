'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.UUIDV4
            },
            letter: {
                type: Sequelize.CHAR,
                allowNull: false,
                unique: true
            },
            location: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            symbol: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
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
        return queryInterface.dropTable('categories');
    }
};