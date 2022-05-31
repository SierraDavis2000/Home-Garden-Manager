const router = require('express').Router();

const userRoutes = require('./user-routes');
const plantRoutes = require('./plant-routes');
const logRoutes = require('./log-routes');

router.use('/users', userRoutes);
router.use('/plants', plantRoutes);
router.use('/logs', logRoutes);


module.exports = router;