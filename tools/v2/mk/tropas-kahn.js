function TropasKahn() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 1);
    antecedentes[1] = newCaracteristica("Recursos", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 3);

    const armas = ["Espada"];

    const personagem = {
        "Nome": "Soldado Kahn",
        "Conceito": "Soldado",
        "Time": "Tropas Kahn",
        "Equipe": "Exoterra",
        "Jogador": "NPC",
        "Cronica": "Mortal Kombat",
        "Assinatura": "Por Shao Kahn!",
        "Escola": "Quartel da Fortaleza",
        "Estilo": "Briga",
        "Forca": 3,
        "Destreza": 3,
        "Vigor": 3,
        "Carisma": 3,
        "Manipulacao": 2,
        "Aparencia": 1,
        "Percepcao": 2,
        "Inteligencia": 2,
        "Raciocinio": 3,
        "Prontidao": 3,
        "Interrogacao": 0,
        "Intimidacao": 4,
        "Perspicacia": 0,
        "Manha": 4,
        "Labia": 0,
        "NovosTalentos": [],
        "LutaCega": 0,
        "Conducao": 3,
        "Lideranca": 3,
        "Seguranca": 2,
        "Furtividade": 0,
        "Sobrevivencia": 0,
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
        "Chute": 2,
        "Bloqueio": 2,
        "Apresamento": 0,
        "Esportes": 2,
        "Foco": 0,
        "NovasTecnicas": tecnicas,
        "Armas": armas,
        "Gloria": 1,
        "Honra": 0,
        "Posto": 1,
        "Chi": 2,
        "ForcaVontade": 5,
        "Saude": 10,
        "Divisao": "Duelistas",
        "ManobrasEspeciais": "Head Butt, Power Uppercut, Foot Sweep",
        "Combos": "Bloqueio para Espada Jab para Espada Jab (Dizzy)"
    };
    return personagem;
}

let npc= TropasKahn();
npc = calcPC(npc);