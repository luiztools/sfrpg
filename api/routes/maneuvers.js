const express = require('express');
const router = express.Router();
const maneuversController = require('../controllers/maneuvers');

app.get('/maneuvers', maneuversController.getAllManeuvers);

app.get('/maneuvers/techniques/:technique', maneuversController.getManeuversByTechnique);

app.get('/maneuvers/styles/:style', maneuversController.getManeuversByTechnique);

module.exports = router;