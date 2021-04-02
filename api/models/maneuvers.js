const maneuvers = require('../data/br/maneuvers.json');

function getSources(source) {
    const officials = ["Core", "Players", "Contenders", "Perfect"];
    const fanmade = ["Shotokan"];

    if (!source || source.toLowerCase().startsWith('all')) return [...officials, ...fanmade];
    if (source.toLowerCase().startsWith('official')) return officials;
    if (source.toLowerCase().startsWith('fan')) return fanmade;

    return source;
}

function getTech(tech) {
    if (tech.toLowerCase() === 'soco') return 'Punch';
    if (tech.toLowerCase() === 'chute') return 'Kick';
    if (tech.toLowerCase() === 'apresamento') return 'Grab';
    if (tech.toLowerCase() === 'bloqueio') return 'Block';
    if (tech.toLowerCase() === 'foco') return 'Focus';
    return tech;
}

function getAllManeuvers(source) {
    const sourceArr = getSources(source);
    return maneuvers.filter(m => sourceArr.some(s => s === m.Source));
}

function getTechManeuvers(tech, source) {
    const sourceArr = getSources(source);
    tech = getTech(tech);
    return maneuvers.filter(m => m.Tech === tech && sourceArr.some(s => s === m.Source));
}

function getManeuver(name, source) {
    const sourceArr = getSources(source);
    return maneuvers.find(m => m.Name === name && sourceArr.some(s => s === m.Source));
}

function searchManeuvers(text, source) {
    const sourceArr = getSources(source);
    text = text.toLowerCase();
    return maneuvers.filter(m => m.Name.toLowerCase().contains(text) && sourceArr.some(s => s === m.Source));
}

module.exports = {
    getAllManeuvers,
    getTechManeuvers,
    getManeuver,
    searchManeuvers
}