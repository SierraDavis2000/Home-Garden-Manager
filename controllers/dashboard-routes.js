const router = require('express').Router();
const { Plant, User, Log } = require('../models');

router.get('/', (req, res) => {
    res.render('dashboard', { loggedIn: true });
});

//get all plants by user
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            // use the ID from the session
            user_id: req.session.user_id
        },
        attributes: {
            exclude: ['password']
        },
        include: [
            {
                model: Plant,
                attributes: ['id', 'common_name', 'latin_name']
            },
            {
                model: Log,
                attributes: ['id', 'plants_watered']
            }
        ]
    })
        .then(dbPlantData => {
            console.log(dbPlantData);
            // serialize data before passing to template
            const plants = dbPlantData.map(plant => plant.get({ plain: true }));
            res.render('plant-details', { plants, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// router.get('/', (req, res) => {
//     Plant.findAll({
//         where: {
//             // use the ID from the session
//             user_id: req.session.user_id
//         },
//         //order: [['common_name', 'ASC']],
//         include: [
//             {
//                 model: Plant,
//                 attributes: ['id', 'common_name', 'latin_name']
//             }
//         ]
//     })
//         .then(dbPlantData => {
//             console.log(dbPlantData);
//             // serialize data before passing to template
//             const plants = dbPlantData.map(plant => plant.get({ plain: true }));
//             res.render('dashboard', { plants, loggedIn: true });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });



module.exports = router;
