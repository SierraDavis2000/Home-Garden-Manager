const router = require('express').Router();
const { User, Plant, Log } = require('../../models');
const sequelize = require('../../config/connection');


// get all watering logs
router.get('/', (req, res)=>{
    Log.findAll({
        order: [['createdAt', 'DESC']], 
        include: [
            {
                model: User,
                attributes: ['email']
            }
        ]       
    })
    .then(dbLogData => res.json(dbLogData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get 1 watering log
router.get('/:id', (req, res)=>{
    Log.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['email']
            }
        ]        
    })
    .then(dbLogData =>{
        if(!dbLogData){
            res.status(404).json({message: 'No log found with this id'});
            return;
        }
        res.json(dbLogData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create new watering log
router.post('/', (req, res)=>{
    Log.create({
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