const router = require('express').Router();
const { Plant, User, } = require('../models');
const withAuth = require('../utils/auth');

//renders plant cards to homepage

router.get('/', async (req, res) => {
  try {
    const options = {
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

      include: [
        //include User model
        {
          model: User,
          attributes: ['username']
        },
      ]

    };
    if (req.query.search) {
      options.where = {
        common_name: req.query.search
      }
    }
    const dbPlantData = await Plant.findAll(options);

    const plants = dbPlantData.map((plant) =>
      plant.get({ plain: true })
    )

    res.render('homepage', {
      plants
    });
  } catch (err) {
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

module.exports = router;