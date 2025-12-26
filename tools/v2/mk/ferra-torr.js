function Torr() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Mascote", 5);
    antecedentes[1] = newCaracteristica("Apoio", 4);

    const armas = [];
    const talentos = [];
    const conhecimentos = [];

    const personagem =
    {
        Nome: "Ferra e Torr",
        Estilo: "Luta-Livre",
        Escola: "Nenhuma",
        Equipe: "Outworld",
        Time: "Outworld",
        Conceito: "Simbionte",
        Assinatura: "Ferra gargalha",
        Jogador: "NPC",
        Cronica: "Mortal Kombat X",
        Forca: 7,
        Destreza: 2,
        Vigor: 7,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 1,
        Inteligencia: 1,
        Raciocinio: 2,
        Prontidao: 2,
        Perspicacia: 1,
        Manha: 0,
        Interrogacao: 0,
        Intimidacao: 5,
        Labia: 0,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 3,
        Estilos: 0,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 3,
        Foco: 1,
        Armas: armas,
        Divisao: "Livre",
        Posto: 7,
        Gloria: 1,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Spinning Back Fist, Foot Sweep, Power Uppercut, Face Slam, Bear Hug, Back Breaker",
        Combos: "Jab – Strong – Forward (dizzy); Jab – Foot Sweep (dizzy); Spinning Back Fist – Fierce; Bloqueio – Face Slam – Ataque de Mascote"
    };
    return personagem;
}

function Ferra() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 4);

    const armas = ["Faca"];
    const talentos = [];
    const conhecimentos = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 4);

    const personagem =
    {
        Nome: "Ferra",
        Estilo: "Luta-Livre",
        Escola: "Nenhuma",
        Equipe: "Outworld",
        Time: "Outworld",
        Conceito: "Simbionte",
        Assinatura: "Gargalha",
        Jogador: "NPC",
        Cronica: "Mortal Kombat X",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 2,
        Perspicacia: 1,
        Manha: 0,
        Interrogacao: 0,
        Intimidacao: 0,
        Labia: 0,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 3,
        Estilos: 0,
        NovosTalentos: talentos,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 0,
        Chute: 0,
        Bloqueio: 0,
        Apresamento: 0,
        Esportes: 4,
        Foco: 0,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 1,
        Gloria: 1,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 4,
        ManobrasEspeciais: "Jump",
        Combos: ""
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'ferra')
    npc = calcPC(Ferra());
else
    npc = calcPC(Torr());