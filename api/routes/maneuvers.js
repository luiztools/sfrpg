const express = require('express');
const router = express.Router();
const maneuversController = require('../controllers/maneuvers');

router.get('/', maneuversController.getAllManeuvers);

router.get('/tecnicas/:tech', maneuversController.getTechManeuvers);

router.get('/techniques/:tech', maneuversController.getTechManeuvers);

router.get('/buscar/:text', maneuversController.searchManeuvers);

router.get('/search/:text', maneuversController.searchManeuvers);

router.get('/:name', maneuversController.getManeuver);

module.exports = router;