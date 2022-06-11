const router = require('express').Router();
const { Plant, User, Log } = require('../models');
const sequelize = require('../config/connection');

//Gets all plants belonging to user
//and renders to the Dashboard
router.get('/', (req, res) => {
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
        'pet_care'
      ],
    //order: [['created_at', 'DESC']],
    include: [
        //include User model
      {
          model: User,
          attributes: ['username']
        },
       // include the Comment model here:
  //  {
  //   model: Comment,
  //   attributes: ['id', 'comment_text', 'plant_id', 'user_id', 'created_at'],
  //   include: {
  //     model: User,
  //     attributes: ['username']
  //   }
  // },
    ]
  })
  .then(dbPlantData => {
    // serialize data before passing to template
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