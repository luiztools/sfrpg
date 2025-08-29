function RetsuSF1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Staff", 2);

    const retsu =
    {
        Nome: "Retsu",
        Estilo: "Kempo",
        Escola: "Templo Shaolin",
        Conceito: "Monge caído",
        Assinatura: "Cruza os braços",
        Jogador: "NPC",
        Time: "Nenhum",
        Equipe: "Nenhuma",
        Cronica: "Street Fighter 1",
        Forca: 5,
        Destreza: 4,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Perspicacia: 4,
        LutaCega: 5,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 2,
        Medicina: 3,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 4,
        ManobrasEspeciais: "Jump, Throw, Back Roll Throw, Power Uppercut, Dragon Punch, Double-Hit Kick, Lightning Leg, Handstand Kick",
        Combos: "Jumping Forward para Handstand Kick (Dizzy)",
        Chi: 6,
        ForcaVontade: 7,
        Saude: 20,
        Posto: 7,
        Divisao: "Tradicional",
        Gloria: 5,
        Honra: 6
    };
    return calcPC(retsu);
}

function RetsuSF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Staff", 2);

    const retsu =
    {
        Nome: "Retsu",
        Estilo: "Kempo",
        Escola: "Templo Shaolin",
        Conceito: "Monge caído",
        Assinatura: "Cruza os braços",
        Jogador: "NPC",
        Time: "Nenhum",
        Equipe: "Nenhuma",
        Cronica: "Street Fighter 6",
        Forca: 5,
        Destreza: 4,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Perspicacia: 5,
        LutaCega: 5,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Medicina: 3,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 3,
        Foco: 5,
        ManobrasEspeciais: "Jump, Throw, Back Roll Throw, Power Uppercut, Dragon Punch, Double-Hit Kick, Lightning Leg, Handstand Kick",
        Combos: "Jumping Forward para Handstand Kick (Dizzy)",
        Chi: 7,
        ForcaVontade: 8,
        Saude: 20,
        Posto: 8,
        Divisao: "Tradicional",
        Gloria: 6,
        Honra: 7
    };
    return calcPC(retsu);
}

let npc;
if (getParameterByName('age') === 'sf1')
    npc = RetsuSF1();
else npc = RetsuSF6();