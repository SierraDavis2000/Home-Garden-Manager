const router = require('express').Router();
const { User, Log } = require('../models');
const withAuth = require('../utils/auth');

// get all watering logs belonging to user
//and renders to the WATERLOG page
router.get('/', withAuth, (req, res) => {
  Log.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'user_id',
      'date_watered',
      'plants_watered'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
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

//renders the ADD-WATERLOG page
router.get('/add-waterlog', (req, res) => {
  res.render('add-waterlog', { loggedIn: true });
});

//gets the info regarding which log to edit
//and renders it to the EDIT-WATERLOG page
router.get('/edit/:id', withAuth, (req, res) => {
  Log.findByPk(req.params.id, {
    attributes: [
      'id',
      'user_id',
      'date_watered',
      'plants_watered',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbLogData => {
      if (dbLogData) {
      const waterlogs = dbLogData.get({ plain: true });
      res.render('edit-waterlog', {
          waterlogs,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;