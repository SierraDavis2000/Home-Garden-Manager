const router = require('express').Router();
const { Plant, User, Log } = require('../models');
const sequelize = require('../config/connection');

//KEEP THIS HERE (waterlog link in NAVBAR)
// get all watering logs belonging to user
router.get('/', (req, res) => {
  Log.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'user_id',
      'date_watered',
      'plants_watered'
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
    .then(dbLogData => {
      const waterlogs = dbLogData.map(log => log.get({ plain: true }));
      res.render('waterlog', { waterlogs, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // create new watering log
// router.post('/dashboard', (req, res) => {
//   Log.create({
//     user_id: req.session.user_id,
//     date_watered: req.body.date_watered,
//     plants_watered: req.body.plants_watered
//   })
//   .then(dbLogData => {
//     const waterlogs = dbLogData.map(log => log.get({ plain: true }));
//     res.render('add-waterlog', { waterlogs, loggedIn: true });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

module.exports = router;