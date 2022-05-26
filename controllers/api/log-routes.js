const router = require('express').Router();
const { User, Plants, Logs } = require('../../models');
const sequelize = require('../../config/connection');


// get all watering logs
router.get('/', (req, res)=>{
    Logs.findAll({
        order: [['createdAt', 'DESC']],        
    })
    .then(dbLogsData => res.json(dbLogsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create new watering log
router.post('/', (req, res)=>{
    Logs.create({
        user_id: req.body.user_id,
        plants_watered: req.body.plants_watered
    })
    .then(dbLogData => res.json(dbLogData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;