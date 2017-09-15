'use strict';
module.exports = function (sequelize, DataTypes) {
    var card_list = sequelize.define('card_list', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgUrl: DataTypes.STRING,
        category: {

        }
    }, {
        classMethods: {}
    });

    card_list.associate = function(models){
        card_list.belongsTo(models.category, {as: "category", key: "categoryId"})
    };
    return card_list;
};