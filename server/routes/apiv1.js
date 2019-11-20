const express = require('express');
const router = express.Router();
const stationRoutes = require('./station/station')


/* Link different endpoints to their respective route handlers */

router.use('/station', stationRoutes)

module.exports = router;
