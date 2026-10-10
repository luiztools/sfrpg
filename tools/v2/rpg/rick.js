function Rick() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 4);
    antecedentes[1] = newCaracteristica("Staff", 3);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Aliados", 3);

    const personagem = {
        "Nome": "Rick",
        "Conceito": "Empresário",
        "Time": "Dee Jay",
        "Equipe": "Rick Inc",
        "Jogador": "NPC",
        "Cronica": "Street Fighter 4",
        "Assinatura": "Papagaio falante",
        "Escola": "",
        "Estilo": "Briga",
        "Forca": 2,
        "Destreza": 3,
        "Vigor": 1,
        "Carisma": 3,
        "Manipulacao": 4,
        "Aparencia": 3,
        "Percepcao": 2,
        "Inteligencia": 3,
        "Raciocinio": 3,
        "Prontidao": 2,
        "Interrogatorio": 2,
        "Intimidacao": 0,
        "Perspicacia": 2,
        "Manha": 1,
        "Labia": 2,
        "NovosTalentos": [],
        "LutaCega": 0,
        "Conducao": 2,
        "Lideranca": 1,
        "Seguranca": 0,
        "Furtividade": 1,
        "Sobrevivencia": 0,
        "NovasPericias": [],
        "Arena": 1,
        "Computador": 0,
        "Investigacao": 1,
        "Medicina": 0,
        "Misterios": 0,
        "Estilos": 2,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 1,
        "Chute": 1,
        "Bloqueio": 1,
        "Apresamento": 0,
        "Esportes": 1,
        "Foco": 0,
        "NovasTecnicas": [],
        "Gloria": 2,
        "Honra": 1,
        "Posto": 1,
        "Chi": 1,
        "ForcaVontade": 1,
        "Saude": 5,
        "Divisao": "Tradicional",
        "ManobrasEspeciais": '',
        "Combos": ''
    };
    return personagem;
}

let npc = Rick();

npc = calcPC(npc);