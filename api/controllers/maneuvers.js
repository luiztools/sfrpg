const model = require('../models/maneuvers');

function getAllManeuvers(req, res, next) {
    const source = req.query.source || req.query.fonte;
    const maneuvers = model.getAllManeuvers(source);
    res.json(maneuvers);
}

function getTechManeuvers(req, res, next) {
    const tech = req.params.tech || req.params.tecnica;
    const source = req.query.source || req.query.fonte;
    const maneuvers = model.getTechManeuvers(tech, source);
    res.json(maneuvers);
}

function getManeuver(req, res, next) {
    const name = req.params.name;
    const source = req.query.source || req.query.fonte;
    const maneuver = model.getManeuver(name, source);
    res.json(maneuver);
}

function searchManeuvers(req, res, next) {
    const text = req.params.text;
    const source = req.query.source || req.query.fonte;
    const maneuvers = model.searchManeuvers(text, source);
    res.json(maneuvers);
}

module.exports = {
    getAllManeuvers,
    getTechManeuvers,
    getManeuver,
    searchManeuvers
}