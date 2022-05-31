const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init(
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
        // included to allow admins to identify user in case of bad data - doesn't need to be displayed
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        // timestamp included for admins to identify if bad data submitted
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'plant'
    }
);

module.exports = Plant;