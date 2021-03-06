const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Planner extends Model {}

Planner.init(
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
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscore: true,
        modelName: 'planner'
    }
);

module.exports = Planner;