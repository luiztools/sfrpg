function Capanga() {
    const antecedentes = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 2);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        "Nome": "Capanga",
        "Conceito": "Capanga",
        "Time": "",
        "Equipe": "",
        "Jogador": "NPC",
        "Cronica": "",
        "Assinatura": "",
        "Escola": "",
        "Estilo": "Briga",
        "Forca": 2,
        "Destreza": 3,
        "Vigor": 2,
        "Carisma": 1,
        "Manipulacao": 3,
        "Aparencia": 2,
        "Percepcao": 2,
        "Inteligencia": 2,
        "Raciocinio": 2,
        "Prontidao": 0,
        "Interrogacao": 3,
        "Intimidacao": 2,
        "Perspicacia": 0,
        "Manha": 2,
        "Labia": 0,
        "NovosTalentos": [],
        "LutaCega": 0,
        "Conducao": 2,
        "Lideranca": 0,
        "Seguranca": 0,
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
        "Soco": 1,
        "Chute": 0,
        "Bloqueio": 2,
        "Apresamento": 0,
        "Esportes": 1,
        "Foco": 0,
        "NovasTecnicas": tecnicas,
        "Armas": armas,
        "Gloria": 0,
        "Honra": 0,
        "Posto": 1,
        "Chi": 2,
        "ForcaVontade": 3,
        "Saude": 8,
        "Divisao": "Duelistas",
        "ManobrasEspeciais": "",
        "Combos": ""
    };
    return personagem;
}

let npc= Capanga();
npc = calcPC(npc);