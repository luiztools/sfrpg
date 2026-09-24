function Veterano() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 1);
    antecedentes[1] = newCaracteristica("Recursos", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 2);

    const armas = [];
    armas[0] = "Fuzil";

    const personagem = {
        "Nome": "Veterano",
        "Conceito": "Soldado",
        "Time": "",
        "Equipe": "",
        "Jogador": "NPC",
        "Cronica": "",
        "Assinatura": "",
        "Escola": "",
        "Estilo": "Forças Especiais",
        "Forca": 3,
        "Destreza": 3,
        "Vigor": 3,
        "Carisma": 3,
        "Manipulacao": 2,
        "Aparencia": 2,
        "Percepcao": 3,
        "Inteligencia": 2,
        "Raciocinio": 3,
        "Prontidao": 2,
        "Interrogacao": 0,
        "Intimidacao": 0,
        "Perspicacia": 0,
        "Manha": 2,
        "Labia": 0,
        "NovosTalentos": [],
        "LutaCega": 0,
        "Conducao": 2,
        "Lideranca": 0,
        "Seguranca": 0,
        "Furtividade": 1,
        "Sobrevivencia": 3,
        "NovasPericias": [],
        "Arena": 0,
        "Computador": 0,
        "Investigacao": 0,
        "Medicina": 0,
        "Misterios": 0,
        "Estilos": 0,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 2,
        "Chute": 0,
        "Bloqueio": 2,
        "Apresamento": 1,
        "Esportes": 2,
        "Foco": 0,
        "NovasTecnicas": tecnicas,
        "Armas": armas,
        "Gloria": 0,
        "Honra": 0,
        "Posto": 1,
        "Chi": 1,
        "ForcaVontade": 4,
        "Saude": 8,
        "Divisao": "Duelistas",
        "ManobrasEspeciais": "Spinning Back Fist, Suplex, Jump",
        "Combos": ""
    };
    return personagem;
}

function Profissional() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 1);
    antecedentes[1] = newCaracteristica("Recursos", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 2);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        "Nome": "Profissional",
        "Conceito": "Soldado",
        "Time": "",
        "Equipe": "",
        "Jogador": "NPC",
        "Cronica": "",
        "Assinatura": "",
        "Escola": "",
        "Estilo": "Forças Especiais",
        "Forca": 3,
        "Destreza": 3,
        "Vigor": 4,
        "Carisma": 2,
        "Manipulacao": 2,
        "Aparencia": 2,
        "Percepcao": 3,
        "Inteligencia": 2,
        "Raciocinio": 4,
        "Prontidao": 3,
        "Interrogacao": 0,
        "Intimidacao": 0,
        "Perspicacia": 0,
        "Manha": 2,
        "Labia": 0,
        "NovosTalentos": [],
        "LutaCega": 0,
        "Conducao": 2,
        "Lideranca": 0,
        "Seguranca": 0,
        "Furtividade": 2,
        "Sobrevivencia": 4,
        "NovasPericias": [],
        "Arena": 0,
        "Computador": 0,
        "Investigacao": 0,
        "Medicina": 0,
        "Misterios": 0,
        "Estilos": 0,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 3,
        "Chute": 0,
        "Bloqueio": 2,
        "Apresamento": 2,
        "Esportes": 2,
        "Foco": 0,
        "NovasTecnicas": tecnicas,
        "Armas": armas,
        "Gloria": 0,
        "Honra": 0,
        "Posto": 1,
        "Chi": 2,
        "ForcaVontade": 5,
        "Saude": 10,
        "Divisao": "Duelistas",
        "ManobrasEspeciais": "Spinning Back Fist, Suplex, Jump, Brain Cracker",
        "Combos": ""
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'veterano')
    npc = Veterano();
else 
    npc = Profissional();

npc = calcPC(npc);