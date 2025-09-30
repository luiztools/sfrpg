function Jonin() {

    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Herança de Clã", 3);
    antecedentes[1] = newCaracteristica("Aliados", 3);
    antecedentes[2] = newCaracteristica("Apoio", 3);

     const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 1);

    const armas = [];
    armas[0] = "Katana";

    const personagem = {
        "Nome": "Jonin",
        "Conceito": "Mestre Ninja",
        "Time": "Clã Ninja",
        "Equipe": "Clã Ninja",
        "Jogador": "NPC",
        "Crônica": "",
        "Assinatura": "Some em uma nuvem de fumaça!",
        "Escola": "Clã Ninja",
        "Estilo": "Ninjitsu",
        "Forca": 3,
        "Destreza": 5,
        "Vigor": 3,
        "Carisma": 3,
        "Manipulacao": 3,
        "Aparencia": 2,
        "Percepcao": 3,
        "Inteligencia": 3,
        "Raciocinio": 4,
        "Prontidao": 3,
        "Interrogatorio": 0,
        "Intimidacao": 4,
        "Perspicacia": 3,
        "Manha": 0,
        "Labia": 3,
        "NovosTalentos": [],
        "LutaCega": 3,
        "Conducao": 0,
        "Lideranca": 1,
        "Seguranca": 3,
        "Furtividade": 5,
        "Sobrevivencia": 0,
        "NovasPericias": [],
        "Arena": 0,
        "Computador": 0,
        "Investigacao": 0,
        "Medicina": 0,
        "Misterios": 3,
        "Estilos": 4,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 4,
        "Chute": 2,
        "Bloqueio": 2,
        "Apresamento": 3,
        "Esportes": 4,
        "Foco": 1,
        "NovasTecnicas": tecnicas,
        Armas: armas,
        "Gloria": 3,
        "Honra": 2,
        "Posto": 3,
        "Chi": 4,
        "ForcaVontade": 5,
        "Saude": 13,
        "Divisao": "Duelistas",
        "ManobrasEspeciais": "Handstand Kick, Slide Kick, Backflip Kick, Back Roll Throw, Wall Spring, Jump",
        "Combos": ""
    };
    return personagem;
}

let npc = Jonin();
npc = calcPC(npc);