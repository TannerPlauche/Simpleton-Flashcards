'use strict';
module.exports = function(sequelize, DataTypes) {
  var card_category = sequelize.define('card_category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return card_category;
};