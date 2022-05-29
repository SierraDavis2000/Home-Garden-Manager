const router = require('express').Router();
const { User, Plants } = require('../../models');
const sequelize = require('../../config/connection');


// get all plants
router.get('/', (req, res)=>{
    Plants.findAll({
        order: [['id', 'ASC']],
    })
    .then(dbPlantsData => res.json(dbPlantsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get 1 plant
router.get('/:id', (req, res) => {
    Plants.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbPlantsData => {
        if (!dbPlantsData){
            res.status(404).json({message: 'No plant found with this id'});
            return;
        }
        res.json(dbPlantsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add a plant
router.post('/', (req, res)=>{
    Plants.create({
        common_name: req.body.common_name,
        latin_name: req.body.latin_name,
        watering_schedule: req.body.watering_schedule,
        soil_type: req.body.soil_type,
        light_req: req.body.light_req,
        fertilizer_req: req.body.fertilizer_req,
        space_req: req.body.space_req,
        indoor_outdoor: req.body.indoor_outdoor,
        pest_info: req.body.pest_info,
        companion_planning: req.body.companion_planning,
        pet_care: req.body.pet_care
    })
    .then(dbPlantsData => res.json(dbPlantsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;