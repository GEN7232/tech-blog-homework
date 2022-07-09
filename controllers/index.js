const router = require('express').Router();
const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/me', dashboardRoutes);

module.exports = router;