
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Logs extends Model{}

Logs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allownull: false,
            unique: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        plants_watered: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'logs'
    }
);

module.exports = Logs;