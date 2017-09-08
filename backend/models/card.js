'use strict';
module.exports = function(sequelize, DataTypes) {
  var card = sequelize.define('card', {
      word: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      category: {
          type: DataTypes.UUIDV4,
          references: {
              model: "categories",
              key: "id"
          }
      },
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
      },  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return card;
};