'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctor_info.belongsTo(models.Allcode, { foreignKey: 'priceId', targetKey: 'keyCode', as: 'dataPrice' })
      Doctor_info.belongsTo(models.Allcode, { foreignKey: 'provinceId', targetKey: 'keyCode', as: 'dataProvince' })
      Doctor_info.belongsTo(models.Markdown, { foreignKey: 'doctorId', targetKey: 'doctorId', as: 'dataMarkdown' })
      Doctor_info.belongsTo(models.User, { foreignKey: 'doctorId', as: 'dataIdDoctor' })
      Doctor_info.belongsTo(models.Specialty, { foreignKey: 'specialtyId', targetKey: 'id', as: 'dataSpecialty' })
      Doctor_info.belongsTo(models.Clinic, { foreignKey: 'clinicId', targetKey: 'id', as: 'dataClinic' })
    }
  };
  Doctor_info.init({
    doctorId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER,
    specialtyId: DataTypes.INTEGER,
    priceId: DataTypes.STRING,
    provinceId: DataTypes.STRING,
    paymentId: DataTypes.STRING,
    addressClinic: DataTypes.STRING,
    nameClinic: DataTypes.STRING,
    note: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Doctor_info',
  });
  return Doctor_info;
};