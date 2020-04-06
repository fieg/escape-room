'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderOption = sequelize.define('OrderOption', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT
  });

  OrderOption.associate = (models) => {
    OrderOption.hasOne(models.EscapeRoomOrder)
  };

  return OrderOption;
};