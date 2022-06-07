const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js'); //added by Jenna
const dashboardRoutes = require('./dashboard-routes.js'); //added by Jenna

router.use('/api', apiRoutes);
router.use('/', homeRoutes); //added by Jenna
router.use('/dashboard', dashboardRoutes);//added by Jenna

router.use((req, res) => {
    res.status(404).end();
});
  
module.exports = router;