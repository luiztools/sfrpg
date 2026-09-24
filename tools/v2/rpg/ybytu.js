function Ybytu() {

    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Híbrido Animal", 5);
    antecedentes[1] = newCaracteristica("Mascote", 2);
    antecedentes[2] = newCaracteristica("Sensei", 2);

    const tecnicas = [];

    const personagem = {
        "Nome": "Ybytu",
        "Conceito": "Errante",
        "Time": "",
        "Equipe": "",
        "Jogador": "Rodrigo Magnus",
        "Cronica": "1992",
        "Assinatura": "Sempre em Paz",
        "Escola": "Kang Do-Hyun",
        "Estilo": "Tae kwon do",
        "Forca": 5,
        "Destreza": 6,
        "Vigor": 3,
        "Carisma": 2,
        "Manipulacao": 1,
        "Aparencia": 2,
        "Percepcao": 1,
        "Inteligencia": 1,
        "Raciocinio": 5,
        "Prontidao": 3,
        "Interrogatorio": 0,
        "Intimidacao": 3,
        "Perspicacia": 1,
        "Manha": 0,
        "Labia": 0,
        "NovosTalentos": [],
        "LutaCega": 3,
        "Conducao": 0,
        "Lideranca": 0,
        "Seguranca": 0,
        "Furtividade": 3,
        "Sobrevivencia": 3,
        "NovasPericias": [],
        "Arena": 0,
        "Computador": 0,
        "Investigacao": 0,
        "Medicina": 2,
        "Misterios": 2,
        "Estilos": 0,
        "NovosConhecimentos": [],
        "Antecedentes": antecedentes,
        "Soco": 0,
        "Chute": 2,
        "Bloqueio": 2,
        "Apresamento": 3,
        "Esportes": 2,
        "Foco": 0,
        "NovasTecnicas": [],
        "Gloria": 0,
        "Honra": 3,
        "Posto": 1,
        "Chi": 5,
        "ForcaVontade": 5,
        "Saude": 10,
        "Divisao": "Livre",
        "ManobrasEspeciais": "Head Bite, Kick Defense, Jump, Backflip Kick, Ripping Bite, Claw, Bite, Tail Slash",
        "Combos": "Bloqueio para Ripping Bite para Head Bite"
    };
    return personagem;
}

let npc = Ybytu();

npc = calcPC(npc);