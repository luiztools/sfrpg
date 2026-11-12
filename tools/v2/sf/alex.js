function AlexSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Apoio", 2);
    antecedentes[3] = newCaracteristica("Contatos", 1);
    antecedentes[4] = newCaracteristica("Recursos", 1);
    antecedentes[5] = newCaracteristica("Sensei", 3);

    const alex = {
        Nome: "Alex",
        Estilo: "Wrestling",
        Escola: "Academia do Tom",
        Jogador: "NPC",
        Assinatura: "Faixa Vermelha",
        Conceito: "Militar",
        Cronica: "Street Fighter 5",
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
        ManobrasEspeciais: "Jump, Air Throw, Head Butt, Foot Sweep, Jumping Shoulder Butt, Flying Body Spear, Haymaker, Throw, Air Smash, Suplex, Power Bomb, Back Breaker",
        Combos: "Flying Body Spear para Power Bomb (Dizzy); Jumping Shoulder Butt para Flying Body Spear (Dizzy); Power Uppercut para Haymaker (Dizzy);",
        Gloria: 9,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 10
    };
    return alex;
}

function AlexSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Apoio", 2);
    antecedentes[3] = newCaracteristica("Contatos", 1);
    antecedentes[4] = newCaracteristica("Recursos", 1);
    antecedentes[5] = newCaracteristica("Sensei", 3);

    const alex = {
        Nome: "Alex",
        Estilo: "Wrestling",
        Escola: "Academia do Tom",
        Jogador: "NPC",
        Assinatura: "Faixa Vermelha",
        Conceito: "Militar",
        Cronica: "Street Fighter 6",
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
        ManobrasEspeciais: "Jump, Air Throw, Head Butt, Foot Sweep, Jumping Shoulder Butt, Flying Body Spear, Haymaker, Throw, Air Smash, Suplex, Power Bomb, Back Breaker",
        Combos: "Flying Body Spear para Power Bomb (Dizzy); Jumping Shoulder Butt para Flying Body Spear (Dizzy); Power Uppercut para Haymaker (Dizzy); Bloqueio para Air Throw; Bloqueio para Power Bomb; Bloqueio para Flying Body Spear",
        Gloria: 9,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 10
    };
    return alex;
}

let npc;
if (getParameterByName('age') === 'sf6')
    npc = AlexSF6();
else
    npc = AlexSF5();

npc = calcPC(npc);
