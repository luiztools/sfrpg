function XiangSF2() {

    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Contatos", 1);
    antecedentes[3] = newCaracteristica("Sensei", 2);
    antecedentes[4] = newCaracteristica("Fama", 1);

    const tecnicas = [];

    const personagem = {
        "Nome": "Xiang Wei",
        "Conceito": "Operário Chinês",
        "Time": "Dream Team",
        "Equipe": "",
        "Jogador": "Thiago",
        "Cronica": "1991",
        "Assinatura": "Cospe no oponente caído!",
        "Escola": "Dojô Masters",
        "Estilo": "Karatê Shotokan",
        "Forca": 5,
        "Destreza": 5,
        "Vigor": 5,
        "Carisma": 2,
        "Manipulacao": 3,
        "Aparencia": 3,
        "Percepcao": 2,
        "Inteligencia": 2,
        "Raciocinio": 4,
        "Prontidao": 3,
        "Interrogação": 0,
        "Intimidacao": 0,
        "Perspicacia": 1,
        "Manha": 1,
        "Labia": 3,
        "NovosTalentos": [],
        "LutaCega": 3,
        "Conducao": 2,
        "Lideranca": 1,
        "Seguranca": 2,
        "Furtividade": 3,
        "Sobrevivencia": 2,
        "NovasPericias": [],
        "Arena": 4,
        "Computador": 0,
        "Investigacao": 2,
        "Medicina": 4,
        "Misterios": 2,
        "Estilos": 2,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 0,
        "Chute": 5,
        "Bloqueio": 3,
        "Apresamento": 0,
        "Esportes": 4,
        "Foco": 3,
        "NovasTecnicas": tecnicas,
        "Gloria": 3,
        "Honra": 4,
        "Posto": 7,
        "Chi": 3,
        "ForcaVontade": 9,
        "Saude": 19,
        "Divisao": "Livre",
        "ManobrasEspeciais": "Foot Sweep, Jump, Double Dread Kick, Double Hit Kick, Hurricane Kick, Air Hurricane Kick, Fireball",
        "Combos": "Bloqueio para Hurricane Kick; Movimento para Fireball"
    };
    return personagem;
}

function XiangSFAlpha() {

    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Sensei", 2);
    antecedentes[3] = newCaracteristica("Fama", 1);
    antecedentes[4] = newCaracteristica("Empresário", 3);

    const tecnicas = [];

    const personagem = {
        "Nome": "Xiang",
        "Conceito": "Operário Chinês",
        "Time": "Dream Team",
        "Equipe": "Vodkas Korlov",
        "Jogador": "Thiago",
        "Cronica": "1989",
        "Assinatura": "Cospe no oponente caído!",
        "Escola": "Dojô de Pin",
        "Estilo": "Karatê Shotokan",
        "Forca": 5,
        "Destreza": 5,
        "Vigor": 5,
        "Carisma": 2,
        "Manipulacao": 3,
        "Aparencia": 3,
        "Percepcao": 2,
        "Inteligencia": 2,
        "Raciocinio": 4,
        "Prontidao": 3,
        "Interrogação": 0,
        "Intimidacao": 0,
        "Perspicacia": 1,
        "Manha": 1,
        "Labia": 3,
        "NovosTalentos": [],
        "LutaCega": 3,
        "Conducao": 2,
        "Lideranca": 1,
        "Seguranca": 2,
        "Furtividade": 3,
        "Sobrevivencia": 2,
        "NovasPericias": [],
        "Arena": 3,
        "Computador": 0,
        "Investigacao": 2,
        "Medicina": 3,
        "Misterios": 2,
        "Estilos": 2,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 0,
        "Chute": 5,
        "Bloqueio": 3,
        "Apresamento": 0,
        "Esportes": 4,
        "Foco": 0,
        "NovasTecnicas": tecnicas,
        "Gloria": 2,
        "Honra": 3,
        "Posto": 5,
        "Chi": 3,
        "ForcaVontade": 7,
        "Saude": 15,
        "Divisao": "Livre",
        "ManobrasEspeciais": "Foot Sweep, Jump, Double Dread Kick, Double Hit Kick, Hurricane Kick",
        "Combos": "Bloqueio para Hurricane Kick;"
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'sfa')
    npc = XiangSFAlpha();
else
    npc = XiangSF2();

npc = calcPC(npc);