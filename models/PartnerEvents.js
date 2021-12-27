const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PartnerEvents extends Model {}

PartnerEvents.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    partner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'partner',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'PartnerEvents'
  }
);

module.exports = PartnerEvents;