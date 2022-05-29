const User = require('./User');
const Plants = require('./Plants');
const Logs = require('./Logs')

// User.belongsToMany(Plants, {  
//     through: 'user_plants',  
//     foreignKey: 'userId'
// });

// Plants.belongsToMany(User, {
//     through: 'user_plants',
//     foreignKey: 'plantId'
// });


module.exports = {User, Plants, Logs};