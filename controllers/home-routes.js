const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plant, User, Log } = require('../models');
const withAuth = require('../utils/auth');

//NEED SEED
// get all plants
router.get('/', (req, res)=>{
    Plant.findAll({
        order: [['common_name', 'ASC']],
        include: [
            {
                model: User,
                attributes: ['email']
            }
        ]
    })
    .then(dbPlantData => {
        // pass a single plant object into the homepage template
        
        //res.render('homepage', dbPlantData[0]);
        
        //NEED SEED?
        // //loops over each object and serializes it
        const plants = dbPlantData.map(plant => plant.get({ plain: true }));
        res.render('', {
            plants,
            loggedIn: req.session.loggedIn
          });
      })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});





// GET all plants for homepage
router.get('/', async (req, res) => {
  try {
    const dbPlantData = await Plant.findAll({
      include:[
        {model: Plant,
        attributes: [
            'id',
            'common_name',
            'latin_name',
            'water_schedule',
            'soil_type',
            'light_req',
            'fertilizer_req',
            'space_req',
            'indoor_outdoor',
            'pest_info',
            'pet_care'
    
          ],}
      ]
      
    });

    const plants = dbPlantData.map((plant) =>
      plant.get({ plain: true })
    );

    res.render('homepage', dbPlantData[0].get({ plain: true }));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one plant
// Use the custom middleware before allowing the user to access the gallery
router.get('/gallery/:id', withAuth, async (req, res) => {
  try {
    const dbPlantData = await Plant.findByPk(req.params.id, {
      include: [
        {
          where: {
            id: req.session.id
          },
          attributes: [
            'id',
            'common_name',
            'latin_name',
            'water_schedule',
            'soil_type',
            'light_req',
            'fertilizer_req',
            'space_req',
            'indoor_outdoor',
            'pest_info',
            'pet_care'
    
          ],
        },
      ],
    });

    const plants = dbPlantData.map((plant) =>
    plant.get({ plain: true })
    );

    res.render('gallery', dbPlantData[0].get({ plain: true }));

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one plant
// Use the custom middleware before allowing the user to access the painting
router.get('/plants/:id', withAuth, async (req, res) => {
  try {
    const dbPlantData = await Plant.findByPk(req.params.id);

    const plant = dbPlantData.get({ plain: true });

    res.render('plant', { plant });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

