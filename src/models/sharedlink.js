'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SharedLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SharedLink.init({
    fileId: DataTypes.INTEGER,
    link: DataTypes.STRING,
    expiresAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SharedLink',
  });
  return SharedLink;
};