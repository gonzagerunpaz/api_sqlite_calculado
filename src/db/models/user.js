"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad: {
        type: DataTypes.VIRTUAL(DataTypes.INTEGER, ["fechaNacimiento"]),
        get: function () {
          return Math.floor(
            (new Date() - new Date(this.get("fechaNacimiento"))) /
              (1000 * 60 * 60 * 24 * 365.25)
          );
        },
      },
      iniciales: {
        type: DataTypes.VIRTUAL(DataTypes.STRING, ["userName"]),
        get: function () {
          return `${this.get("userName").charAt(0)}${this.get(
            "userName"
          ).charAt(this.get("userName").length - 1)}`;
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: false,
    }
  );
  return User;
};
