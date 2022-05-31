const User = require('./User');
const Plant = require('./Plant');
const Log = require('./Log')

// relationships/associations
User.hasMany(Plant, {
    foreignKey: 'user_id'
});

Plant.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Log, {
    foreignKey: 'user_id'
});

Log.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = {User, Plant, Log};