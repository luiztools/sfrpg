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

    if (tech === 'soco') return 'Punch';
    if (tech === 'chute') return 'Kick';
    if (tech === 'apresamento') return 'Grab';
    if (tech === 'bloqueio') return 'Block';
    if (tech === 'foco') return 'Focus';
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