const Station = require('../models/station');

/* Get Station by their id */
function getStationById(id) {
  return Station.findById(id);
}

/* Get list of entire Stations from the database */
function getAllStations() {
  return Station.find({});
}

/* CREATE STATION*/
function createNewStation(data){
  return new Station({...data}).save()
}
module.exports = { getStationById, getAllStations };
