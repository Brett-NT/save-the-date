const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GuestEvents extends Model {}

GuestEvents.init(
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
    guest_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'guest',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'GuestEvents'
  }
);

module.exports = GuestEvents;