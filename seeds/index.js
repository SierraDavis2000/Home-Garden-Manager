const sequelize = require('../config/connection');
const seedPlant = require('./plant-seed');

 

const seedAll = async () => {
    await sequelize.sync({force:true});

    await seedPlant();
    console.log('--------------');

    process.exit(0);
};

seedAll();