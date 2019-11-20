const express = require('express');
const router = express.Router();
const stationRoutes = require('./station/station')
const userRoutes = require('./user/user')


/* Link different endpoints to their respective route handlers */

router.use('/station', stationRoutes)
router.use('/user', userRoutes)

module.exports = router;
