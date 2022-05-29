const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Plants extends Model {}

Plants.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        common_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        latin_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        watering_schedule: {
            type: DataTypes.STRING,
            allowNull: true
        },
        soil_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        light_req: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fertilizer_req: {
            type: DataTypes.STRING,
            allowNull: true
        },
        space_req: {
            type: DataTypes.STRING,
            allowNull: true
        },
        indoor_outdoor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pest_info: {
            type: DataTypes.STRING,
            allowNull: true
        },
        companion_planning: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pet_care: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'plants'
    }
);

module.exports = Plants;