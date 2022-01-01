const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        planner_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        planner_contact: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event'
    }
);

module.exports = Event;