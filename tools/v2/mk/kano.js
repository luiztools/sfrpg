function KanoMK3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Cibernético", 1);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 6);

    const armas = ["Faca", "Faca Arremessada"];

    const personagem =
    {
        Nome: "Kano",
        Estilo: "Aikidô",
        Escola: "Black Dragon",
        Equipe: "Black Dragon",
        Time: "Black Dragon",
        Conceito: "Mercenário",
        Assinatura: "Placa de metal na face",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 4,
        Labia: 3,
        LutaCega: 0,
        Conducao: 4,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 5,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 1,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 5,
        Honra: 0,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Head Butt, Throw, Rolling Attack, Sonic Boom",
        Combos: "Head Butt para Power Uppercut (dizzy); Forward para Forward para Roundhouse (Dizzy); Forward para Forward para Head Butt (Dizzt); Jab para Jab para Head Butt (dizzy)"
    };
    return personagem;
}

function KanoMKX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Cibernetico", 1);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);
    tecnicas[1] = newCaracteristica("Arremesso", 6);
    tecnicas[2] = newCaracteristica("Armas de Fogo", 3);

    const armas = ["Faca", "Faca Arremessada", "Granada"];

    const personagem =
    {
        Nome: "Kano",
        Estilo: "Aikidô",
        Escola: "Black Dragon",
        Equipe: "Black Dragon",
        Time: "Black Dragon",
        Conceito: "Mercenário",
        Assinatura: "Placa de metal na face",
        Jogador: "NPC",
        Cronica: "Mortal Kombat X",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 4,
        Labia: 3,
        LutaCega: 0,
        Conducao: 4,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 1,
        Arena: 5,
        Computador: 0,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 1,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Tradicional",
        Posto: 8,
        Gloria: 5,
        Honra: 0,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Head Butt, Throw, Rolling Attack, Sonic Boom, Double Hit Kick, Flying Tackle, Vertical Rolling Attack, Suplex, Knee Basher",
        Combos: "Head Butt para Power Uppercut (dizzy); Forward para Forward para Roundhouse (Dizzy); Forward para Forward para Head Butt (Dizzt); Jab para Jab para Head Butt (dizzy); Rolling Attack para Flying Tackle (dizzy);"
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'mk1')
    npc = calcPC(KanoMK3());
else
    npc = calcPC(KanoMKX());