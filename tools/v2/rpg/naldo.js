function Naldo() {

    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 1);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Sensei", 5);

    const tecnicas = [];

    const personagem = {
        "Nome": "Naldo Guerreiro",
        "Conceito": "Estudante",
        "Time": "",
        "Equipe": "",
        "Jogador": "Raryson Rost",
        "Cronica": "1992",
        "Assinatura": "Açaí é Força!",
        "Escola": "Gracie Jiu Jitsu",
        "Estilo": "Jiu Jitsu",
        "Forca": 5,
        "Destreza": 3,
        "Vigor": 3,
        "Carisma": 2,
        "Manipulacao": 1,
        "Aparencia": 3,
        "Percepcao": 3,
        "Inteligencia": 2,
        "Raciocinio": 3,
        "Prontidao": 3,
        "Interrogatorio": 0,
        "Intimidacao": 2,
        "Perspicacia": 3,
        "Manha": 1,
        "Labia": 0,
        "NovosTalentos": [],
        "LutaCega": 3,
        "Conducao": 1,
        "Lideranca": 1,
        "Seguranca": 0,
        "Furtividade": 0,
        "Sobrevivencia": 1,
        "NovasPericias": [],
        "Arena": 1,
        "Computador": 1,
        "Investigacao": 0,
        "Medicina": 1,
        "Misterios": 0,
        "Estilos": 0,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 1,
        "Chute": 1,
        "Bloqueio": 1,
        "Apresamento": 3,
        "Esportes": 2,
        "Foco": 0,
        "NovasTecnicas": [],
        "Gloria": 0,
        "Honra": 3,
        "Posto": 1,
        "Chi": 5,
        "ForcaVontade": 10,
        "Saude": 10,
        "Divisao": "Livre",
        "ManobrasEspeciais": "Thow, Breakfall, Suplex, Jump, Pin, Improved Pin, Hair Throw",
        "Combos": "Bloqueio para Ripping Bite para Head Bite"
    };
    return personagem;
}

let npc = Naldo();

npc = calcPC(npc);