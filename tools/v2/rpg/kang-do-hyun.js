function Kang() {

    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Apoio", 1);
    antecedentes[3] = newCaracteristica("Arena", 1);
    antecedentes[4] = newCaracteristica("Fama", 1);
    antecedentes[5] = newCaracteristica("Satsui no Hadou", 1);

    const novosTalentos = [];
    novosTalentos[0] = newCaracteristica("Instrução", 2);

    const tecnicas = [];

    const personagem = {
        "Nome": "Kang Do-Hyun",
        "Conceito": "Veterano",
        "Time": "",
        "Equipe": "",
        "Jogador": "",
        "Cronica": "",
        "Assinatura": "Sempre em Paz",
        "Escola": "Exército Sul-Coreano",
        "Estilo": "Tae kwon do",
        "Forca": 3,
        "Destreza": 5,
        "Vigor": 3,
        "Carisma": 2,
        "Manipulacao": 2,
        "Aparencia": 2,
        "Percepcao": 2,
        "Inteligencia": 3,
        "Raciocinio": 5,
        "Prontidao": 2,
        "Interrogatorio": 2,
        "Intimidacao": 1,
        "Perspicacia": 5,
        "Manha": 1,
        "Labia": 1,
        "NovosTalentos": novosTalentos,
        "LutaCega": 3,
        "Conducao": 2,
        "Lideranca": 3,
        "Seguranca": 1,
        "Furtividade": 2,
        "Sobrevivencia": 5,
        "NovasPericias": [],
        "Arena": 5,
        "Computador": 0,
        "Investigacao": 2,
        "Medicina": 3,
        "Misterios": 3,
        "Estilos": 5,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 2,
        "Chute": 5,
        "Bloqueio": 4,
        "Apresamento": 2,
        "Esportes": 3,
        "Foco": 2,
        "NovasTecnicas": [],
        "Gloria": 1,
        "Honra": 6,
        "Posto": 0,
        "Chi": 4,
        "ForcaVontade": 7,
        "Saude": 14,
        "Divisao": "Tradicional",
        "ManobrasEspeciais": "Kick Defense, Punch Defense, Throw, Back Roll Throw, Knee Basher, Double-Hit Kick, Foot Sweep, Spinning Foot Sweep, Light Feet, Double Dread Kick, Flamingo Stance, Lightning Leg, Jump",
        "Combos": "Bloqueio para Lightning Leg (Dizzy); Bloqueio para Knee Basher; Double Dread Kick para Lightning Leg (Dizzy)"
    };
    return personagem;
}

let npc = Kang();

npc = calcPC(npc);