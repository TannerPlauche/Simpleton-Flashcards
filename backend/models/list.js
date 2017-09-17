'use strict';
module.exports = function (sequelize, DataTypes) {
    var list = sequelize.define('list', {
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

    list.associate = function(models){
        list.belongsToMany(models.card, {through:"card_list"});
    };
    return list;
};