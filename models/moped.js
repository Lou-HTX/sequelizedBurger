module.exports = function(sequelize, DataTypes) {
    var Moped = sequelize.define("Moped", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        moped_part: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        installed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            notEmpty: true
        },

    });
    return Moped;
}