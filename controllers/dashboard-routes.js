const router = require('express').Router();
const { Plant, User, } = require('../models');
const withAuth = require('../utils/auth');

//Gets all plants belonging to user
//and renders to the Dashboard
router.get('/', withAuth, (req, res) => {
  Plant.findAll({
    where: {
      user_id: req.session.user_id
    },
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
      'pet_care',
      'createdAt'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
    ]
  })
    .then(dbPlantData => {
      const plants = dbPlantData.map(plant => plant.get({ plain: true }));
      res.render('dashboard', { plants, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//renders the /add-plant HTML
router.get('/add-plant', (req, res) => {
  res.render('add-plant', { loggedIn: true });
});

module.exports = router;