const User = require('./User');
const Plants = require('./Plants');
const Logs = require('./Logs')

User.hasMany(Plants, {    
    foreignKey: 'plants_id'
});

Plants.belongsToMany(User, {
    through: User,
    foreignKey: 'id'
});


module.exports = {User, Plants, Logs};