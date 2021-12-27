const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Guest extends Model {}

Guest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        attending: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'guest'
    }
);

module.exports = Guest;