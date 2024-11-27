function AlexSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Apoio", 1);
    antecedentes[3] = newCaracteristica("Contatos", 1);
    antecedentes[4] = newCaracteristica("Recursos", 1);
    antecedentes[5] = newCaracteristica("Sensei", 3);

    const alex =
    {
        Nome: "Alex",
        Estilo: "Luta-Livre",
        Escola: "Academia do Tom",
        Conceito: "Militar",
        Assinatura: "Faixa Vermelha",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 5,
        Destreza: 3,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 3,
        Labia: 2,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 2,
        Investigacao: 4,
        Medicina: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 3,
        Foco: 3,
        Gloria: 7,
        Honra: 5,
        Chi: 5,
        ForcaVontade: 8,
        Saude: 15,
        Posto: 8,
        Divisao: "Tradicional",
        ManobrasEspeciais: "Jump, Air Throw, Head Butt, Foot Sweep, Jumping Shoulder Butt, Flying Body Spear, Haymaker, Throw, Air Smash, Suplex, Power Bomb, Back Breaker",
        Combos: "Flying Body Spear para Power Bomb (Dizzy); Jumping Shoulder Butt para Flying Body Spear (Dizzy); Power Uppercut para Haymaker (Dizzy);",
    };
    return alex;
}

function AlexSF3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Apoio", 2);
    antecedentes[3] = newCaracteristica("Contatos", 1);
    antecedentes[4] = newCaracteristica("Recursos", 1);
    antecedentes[5] = newCaracteristica("Sensei", 3);

    const alex =
    {
        Nome: "Alex",
        Estilo: "Luta-Livre",
        Escola: "Academia do Tom",
        Conceito: "Militar",
        Assinatura: "Faixa Vermelha",
        Jogador: "NPC",
        Cronica: "Street Fighter 3",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 4,
        Labia: 2,
        LutaCega: 0,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 4,
        Medicina: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 7,
        Esportes: 4,
        Foco: 4,
        Gloria: 9,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 10,
        Saude: 20,
        Posto: 10,
        Divisao: "Tradicional",
        ManobrasEspeciais: "Jump, Air Throw, Head Butt, Foot Sweep, Jumping Shoulder Butt, Flying Body Spear, Haymaker, Throw, Air Smash, Suplex, Power Bomb, Back Breaker",
        Combos: "Flying Body Spear para Power Bomb (Dizzy); Jumping Shoulder Butt para Flying Body Spear (Dizzy); Power Uppercut para Haymaker (Dizzy);",
    };
    return alex;
}

let npc;
if (getParameterByName('age') === 'sf3')
    npc = AlexSF3
else
    npc = AlexSF5();

npc = calcPC(npc);