'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.removeColumn('categories', 'letter');
        queryInterface.removeColumn('categories', 'location');
        queryInterface.removeColumn('categories', 'symbol');

        queryInterface.addColumn(
            'categories',
            'letter',
            {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "X",
                unique: false
            }
        );

        queryInterface.addColumn(
            'categories',
            'location',
            {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "X",
                unique: false
            }
        );

        queryInterface.addColumn(
            'categories',
            'symbol',
            {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "X",
                unique: false
            }
        );
    },

    down: function (queryInterface, Sequelize) {
        queryInterface.removeColumn('categories', 'letter');
        queryInterface.removeColumn('categories', 'location');
        queryInterface.removeColumn('categories', 'symbol');

        queryInterface.addColumn(
            'categories',
            'letter',
            {
                type: Sequelize.CHAR,
                allowNull: false,
                unique: true,
                defaultValue: "X"
            }
        );

        queryInterface.addColumn(
            'categories',
            'location',
            {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                defaultValue: "X"

            }
        );

        queryInterface.addColumn(
            'categories',
            'symbol',
            {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                defaultValue: "X"

            }
        );
    }
};
