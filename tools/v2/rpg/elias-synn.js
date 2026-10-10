function EliasSynn() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 5);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Staff", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Aliados", 4);

    const personagem = {
        "Nome": "Elias Synn",
        "Conceito": "Empresário",
        "Time": "Dragon Rising",
        "Equipe": "Shadaloo",
        "Jogador": "NPC",
        "Cronica": "Segredos da Shadaloo",
        "Assinatura": "Sorriso Malicioso",
        "Escola": "",
        "Estilo": "Ler Drit",
        "Forca": 3,
        "Destreza": 4,
        "Vigor": 2,
        "Carisma": 4,
        "Manipulacao": 5,
        "Aparencia": 4,
        "Percepcao": 3,
        "Inteligencia": 4,
        "Raciocinio": 4,
        "Prontidao": 3,
        "Interrogatorio": 3,
        "Intimidacao": 1,
        "Perspicacia": 3,
        "Manha": 1,
        "Labia": 2,
        "NovosTalentos": [],
        "LutaCega": 0,
        "Conducao": 1,
        "Lideranca": 2,
        "Seguranca": 3,
        "Furtividade": 1,
        "Sobrevivencia": 0,
        "NovasPericias": [],
        "Arena": 1,
        "Computador": 0,
        "Investigacao": 2,
        "Medicina": 0,
        "Misterios": 1,
        "Estilos": 4,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 3,
        "Chute": 2,
        "Bloqueio": 3,
        "Apresamento": 1,
        "Esportes": 3,
        "Foco": 3,
        "NovasTecnicas": [],
        "Gloria": 3,
        "Honra": 0,
        "Posto": 1,
        "Chi": 5,
        "ForcaVontade": 5,
        "Saude": 10,
        "Divisao": "Tradicional",
        "ManobrasEspeciais": 'Ducking Fierce, Suplex, Psychokinetic Channeling, Cobra Charm, Telepathy',
        "Combos": 'Ducking Fierce para Suplex para Cobra Charm'
    };
    return personagem;
}

let npc = EliasSynn();

npc = calcPC(npc);