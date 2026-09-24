function Ravi() {

    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Elemental", 2);
    antecedentes[1] = newCaracteristica("Sensei", 5);

    const tecnicas = [];

    const personagem = {
        "Nome": "Ravi",
        "Conceito": "Monge Shaolin",
        "Time": "",
        "Equipe": "Ordem da Luz",
        "Jogador": "Diego Lopes",
        "Cronica": "1992",
        "Assinatura": "Kin Lai",
        "Escola": "Ordem da Luz",
        "Estilo": "Kung Fu",
        "Forca": 1,
        "Destreza": 4,
        "Vigor": 5,
        "Carisma": 3,
        "Manipulacao": 2,
        "Aparencia": 1,
        "Percepcao": 2,
        "Inteligencia": 1,
        "Raciocinio": 5,
        "Prontidao": 3,
        "Interrogatorio": 0,
        "Intimidacao": 0,
        "Perspicacia": 3,
        "Manha": 0,
        "Labia": 3,
        "NovosTalentos": [],
        "LutaCega": 3,
        "Conducao": 0,
        "Lideranca": 0,
        "Seguranca": 0,
        "Furtividade": 2,
        "Sobrevivencia": 2,
        "NovasPericias": [],
        "Arena": 0,
        "Computador": 0,
        "Investigacao": 0,
        "Medicina": 1,
        "Misterios": 3,
        "Estilos": 0,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 3,
        "Chute": 0,
        "Bloqueio": 0,
        "Apresamento": 0,
        "Esportes": 2,
        "Foco": 3,
        "NovasTecnicas": [],
        "Gloria": 0,
        "Honra": 3,
        "Posto": 1,
        "Chi": 10,
        "ForcaVontade": 10,
        "Saude": 10,
        "Divisao": "Livre",
        "ManobrasEspeciais": "Jump, Flicker Jab, Flaming Fist",
        "Combos": "Jab para Jab"
    };
    return personagem;
}

let npc = Ravi();

npc = calcPC(npc);