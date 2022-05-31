const seedPlant = require('./plant-seed');

const sequelize = require('../config/connection'); 

const seedAll = async () => {
    await sequelize.sync({force:true});
    console.log('--------------');

    await seedPlant();
    console.log('--------------');

    process.exit(0);
};

seedAll();