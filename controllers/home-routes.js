const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plant, User, Log } = require('../models');
//const withAuth = require('../utils/auth');

//renders plant cards to homepage

router.get('/', async (req, res) => {
  try {
    const dbPlantData = await Plant.findAll({
      attributes: [
        'id',
        'common_name',
        'latin_name',
        'watering_schedule',
        'soil_type',
        'light_req',
        'fertilizer_req',
        'space_req',
        'indoor_outdoor',
        'pest_info',
        'pet_care'
      ],
    });

    const plants = dbPlantData.map((plant) => 
      plant.get({plain : true})
    )

    res.render('homepage', {
      plants
    });
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
 
  
});

//route for one plant

router.get('/plant-info/:id', async (req, res) => {
  try {
    const dbPlantData = await Plant.findByPk(req.params.id);

    const plant = dbPlantData.get({ plain: true });

    res.render('plant-info', { plant });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//login route

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

  // add a plant (keep this here in home-routes)
  router.post('/', (req, res) => {
    if (req.session) {
   Plant.create({
       common_name: req.body.common_name,
       latin_name: req.body.latin_name,
       watering_schedule: req.body.watering_schedule,
       soil_type: req.body.soil_type,
       light_req: req.body.light_req,
       fertilizer_req: req.body.fertilizer_req,
       space_req: req.body.space_req,
       indoor_outdoor: req.body.indoor_outdoor,
       pest_info: req.body.pest_info,
       pet_care: req.body.pet_care,
       user_id: req.session.user_id
   })
       .then(dbPlantData => res.json(dbPlantData))
       .catch(err => {
           console.log(err);
           res.status(500).json(err);
       });
     }
  });

module.exports = router;