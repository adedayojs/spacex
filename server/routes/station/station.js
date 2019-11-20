const express = require('express');
const router = express.Router();
const {
  getStationById,
  getAllStations,
  createNewStation
} = require('../../controllers/station');
const { isValidObjectId } = require('../../helpers/ObjectIdValidator');

/* GET station by their ids. */
router.get('/:id', async function(req, res) {
  //  Validate the id provided to know if it is a valid mongoose id type and not just a random string
  if (isValidObjectId(req.params.id)) {
    const user = await getStationById(req.params.id);
    res.status(200).json({ success: true, data: user });
  }
});

/** GET ALL STATIONS */
router.get('/', async function(req, res) {
  //  Validate the id provided to know if it is a valid mongoose id type and not just a random string
  try {
    const users = await getAllStations(req.params.id);
    return res.status(200).json({ data: users });
  } catch (err) {
    return res.status(500).send(err.body);
  }
});

/** CREATE A STATION */
router.post('/', async function(req, res) {
  try {
    const station = await createNewStation(req.body);
    return res.status(201).json({ data: station });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

module.exports = router;
