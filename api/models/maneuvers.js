const maneuvers = require('../data/maneuvers.json');

function getSources(source) {
    const officials = ["Core", "Players", "Contenders", "Perfect"];
    const fanmade = ["Shotokan"];
    source = source ? source.toLowerCase() : '';

    if (!source || source.startsWith('all')
        || source.startsWith('todos')) return [...officials, ...fanmade];

    if (source.startsWith('official')
        || source.startsWith('oficia')) return officials;

    if (source.startsWith('fan')
        || source.startsWith('fã')) return fanmade;

    return source;
}

function getTech(tech) {
    tech = tech.toLowerCase();

    switch (tech) {
        case 'soco': return 'Punch';
        case 'chute': return 'Kick';
        case 'apresamento': return 'Grab';
        case 'bloqueio': return 'Block';
        case 'foco': return 'Focus';
        default: return tech;
    }
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