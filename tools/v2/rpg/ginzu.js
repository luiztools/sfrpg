function Ginzu() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 4);
    antecedentes[1] = newCaracteristica("Aliados", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Contatos", 4);
    antecedentes[4] = newCaracteristica("Paranormal", 1);
    antecedentes[5] = newCaracteristica("Mascote", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 2);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        "Nome": "George Ginzu",
        "Conceito": "Hacker paranormal",
        "Time": "Delta Red",
        "Equipe": "MI6",
        "Jogador": "NPC",
        "Cronica": "Street Fighter 2",
        "Assinatura": "Mascote estranho",
        "Escola": "Delta Red",
        "Estilo": "Forças Especiais",
        "Forca": 2,
        "Destreza": 2,
        "Vigor": 2,
        "Carisma": 3,
        "Manipulacao": 2,
        "Aparencia": 2,
        "Percepcao": 5,
        "Inteligencia": 5,
        "Raciocinio": 5,
        "Prontidao": 3,
        "Interrogacao": 0,
        "Intimidacao": 0,
        "Perspicacia": 3,
        "Manha": 1,
        "Labia": 1,
        "NovosTalentos": [],
        "LutaCega": 0,
        "Conducao": 1,
        "Lideranca": 0,
        "Seguranca": 5,
        "Furtividade": 2,
        "Sobrevivencia": 2,
        "NovasPericias": [],
        "Arena": 0,
        "Computador": 5,
        "Investigacao": 3,
        "Medicina": 1,
        "Misterios": 1,
        "Estilos": 0,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 1,
        "Chute": 1,
        "Bloqueio": 1,
        "Apresamento": 0,
        "Esportes": 2,
        "Foco": 1,
        "NovasTecnicas": tecnicas,
        "Armas": armas,
        "Gloria": 1,
        "Honra": 1,
        "Posto": 1,
        "Chi": 4,
        "ForcaVontade": 2,
        "Saude": 8,
        "Divisao": "Duelistas",
        "ManobrasEspeciais": "Jump",
        "Combos": ""
    };
    return personagem;
}

let npc= Ginzu();
npc = calcPC(npc);