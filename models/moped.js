module.exports = function(sequelize, DataTypes) {
    var Moped = sequelize.define("Moped", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        moped_part: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        installed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            notEmpty: true
        },

    });
    return Moped;
}