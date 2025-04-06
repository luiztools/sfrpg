function Hanna() {
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
        "Nome": "Hanna Ackerson",
        "Conceito": "Equipe de Apoio",
        "Time": "Delta Red",
        "Equipe": "MI6",
        "Jogador": "NPC",
        "Cronica": "Street Fighter 4",
        "Assinatura": "Mascotes",
        "Escola": "Delta Red",
        "Estilo": "Forças Especiais",
        "Forca": 2,
        "Destreza": 2,
        "Vigor": 2,
        "Carisma": 4,
        "Manipulacao": 2,
        "Aparencia": 3,
        "Percepcao": 4,
        "Inteligencia": 4,
        "Raciocinio": 4,
        "Prontidao": 2,
        "Interrogatorio": 1,
        "Intimidacao": 0,
        "Perspicacia": 2,
        "Manha": 1,
        "Labia": 2,
        "NovosTalentos": [],
        "LutaCega": 0,
        "Conducao": 1,
        "Lideranca": 1,
        "Seguranca": 4,
        "Furtividade": 1,
        "Sobrevivencia": 1,
        "NovasPericias": [],
        "Arena": 0,
        "Computador": 4,
        "Investigacao": 3,
        "Medicina": 0,
        "Misterios": 0,
        "Estilos": 0,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 0,
        "Chute": 0,
        "Bloqueio": 1,
        "Apresamento": 1,
        "Esportes": 1,
        "Foco": 0,
        "NovasTecnicas": tecnicas,
        "Armas": armas,
        "Gloria": 0,
        "Honra": 1,
        "Posto": 1,
        "Chi": 1,
        "ForcaVontade": 2,
        "Saude": 5,
        "Divisao": "Duelistas",
        "ManobrasEspeciais": "Jump",
        "Combos": ""
    };
    return personagem;
}

let npc= Hanna();
npc = calcPC(npc);