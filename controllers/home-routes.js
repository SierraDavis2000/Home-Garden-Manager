const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plant, User, Log } = require('../models');

//NEED SEED
// get all plants
router.get('/', (req, res)=>{
    Plant.findAll({
        order: [['common_name', 'ASC']],
        include: [
            {
                model: User,
                attributes: ['email']
            }
        ]
    })
    .then(dbPlantData => {
        // pass a single plant object into the homepage template
        
        //res.render('homepage', dbPlantData[0]);
        
        //NEED SEED?
        // //loops over each object and serializes it
        const plants = dbPlantData.map(plant => plant.get({ plain: true }));
        res.render('', {
            plants,
            loggedIn: req.session.loggedIn
          });
      })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    res.render('login');
  });
  
module.exports = router;
