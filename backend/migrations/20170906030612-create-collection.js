'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('collections', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true
          },
          description: {
              type: Sequelize.TEXT,
          },
          categoryId: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: "categories",
                  key: "id"
              }
          },
          creatorId: {
              type: Sequelize.INTEGER,
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('collections');
  }
};