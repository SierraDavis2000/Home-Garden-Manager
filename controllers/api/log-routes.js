const router = require('express').Router();
const { User, Log } = require('../../models');
const withAuth = require('../../utils/auth');

// get all watering logs
router.get('/', (req, res) => {
    Log.findAll({
        order: [['createdAt', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
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
router.get('/:id', (req, res) => {
    Log.findOne({
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
        .then(dbLogData => {
            if (!dbLogData) {
                res.status(404).json({ message: 'No log found with this id' });
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
router.post('/', withAuth, (req, res) => {
    Log.create({
        user_id: req.session.user_id,
        date_watered: req.body.date_watered,
        plants_watered: req.body.plants_watered
    })
        .then(dbLogData => res.json(dbLogData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update plants watered in log
router.put('/:id', withAuth, (req, res) => {
    Log.update(
        {
        date_watered: req.body.date_watered,
        plants_watered: req.body.plants_watered
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbLogData => {
            if (!dbLogData) {
                res.status(404).json({ message: 'No log found with this id' });
                return;
            }
            res.json(dbLogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete a watering log
router.delete('/:id', withAuth, (req, res) => {
    Log.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbLogData => {
            if (!dbLogData) {
                res.status(404).json({ message: 'No log found with this id' });
                return;
            }
            res.json(dbLogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;