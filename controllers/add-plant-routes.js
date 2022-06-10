const router = require('express').Router();
const { Plant, User, Log } = require('../models');
const sequelize = require('../config/connection');

//keep this here
router.get('/', (req, res) => {
    res.render('add-plant', { loggedIn: true });
  });

module.exports = router;