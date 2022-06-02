const router = require('express').Router();
const { User, Plant } = require('../../models');


// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get 1 user
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create a new user
router.post('/', (req, res) => {
    User.create({
       // username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData)) 

    //    //Jenna updating .then to include login session code ln 45-55
    //    // doesn't work at the moment
    //     .then(dbUserData => {
    //         req.session.save(() => {
    //             req.session.user_id = dbUserData.id;
    //             req.session.email = dbUserData.email;
    //             req.session.loggedIn = true;

    //             res.json(dbUserData);
    //         });
    //     })

        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// route to verify user for login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }
        // verify user
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Password incorrect' });
            return;
        }
    //    //Jenna adding lines 76-81 for login session 
    //    // doesn't work at the moment
    //     req.session.save(() => {
    //         // declare session variables
    //         req.session.user_id = dbUserData.id;
    //         req.session.email = dbUserData.email;
    //         req.session.loggedIn = true;

           res.json({ user: dbUserData, message: 'Login successful!' });
    //     });
    })
});


// could add PUT route here if needed

// delete a user - not necessary for MVP but for future versions
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;