const router = require('express').Router();
const { User, Plants } = require('../../models');


// get all
router.get('/', (req, res)=>{
    User.findAll({
        include: {
            model: Plants,
            attributes: ['id','name']
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
});

// get 1 user
router.get('/:id', (req, res)=>{
    User.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: Plants,
            attributes: ['id','name']
        }
    })
    .then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create new user
router.post('/', (req, res)=>{
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;