const router = require('express').Router();
const { User, Plant } = require('../../models');
const sequelize = require('../../config/connection');


// get all plants
router.get('/', (req, res) => {
    Plant.findAll({
        //order: [['common_name', 'ASC']],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })
        .then(dbPlantData => res.json(dbPlantData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get 1 plant
router.get('/:id', (req, res) => {
    Plant.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })
        .then(dbPlantData => {
            if (!dbPlantData) {
                res.status(404).json({ message: 'No plant found with this id' });
                return;
            }
            res.json(dbPlantData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// add a plant
router.post('/', (req, res) => {
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
});

// update plant info
router.put('/:id', (req, res) => {
    Plant.update(
        {
            common_name: req.body.common_name,
            latin_name: req.body.latin_name,
            watering_schedule: req.body.watering_schedule,
            soil_type: req.body.soil_type,
            light_req: req.body.light_req,
            fertilizer_req: req.body.fertilizer_req,
            space_req: req.body.space_req,
            indoor_outdoor: req.body.indoor_outdoor,
            pest_info: req.body.pest_info,
            pet_care: req.body.pet_care
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPlantData => {
            if (!dbPlantData) {
                res.status(404).json({ message: 'No plant found with this id' });
                return;
            }
            res.json(dbPlantData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete a plant
router.delete('/:id', (req, res) => {
    Plant.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPlantData => {
            if (!dbPlantData) {
                res.status(404).json({ message: 'No plant found with this id' });
                return;
            }
            res.json(dbPlantData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;