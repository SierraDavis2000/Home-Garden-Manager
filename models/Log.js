
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Log extends Model{}

Log.init(
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
        date_watered: {
            type: DataTypes.DATEONLY,
            allowNull:false, 
        },
        createdAt: {
            type: DataTypes.DATEONLY
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'log'
    }
);

module.exports = Log;