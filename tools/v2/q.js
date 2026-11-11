function QSF3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Cibernético", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Recursos", 2);

    const q = {
        Nome: "Q",
        Estilo: "Jeet Kune Dô",
        Escola: "Várias",
        Jogador: "NPC",
        Assinatura: "Máscara de Ferro",
        Conceito: "Androide",
        Cronica: "Street Fighter 3",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 1,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 5,
        Labia: 2,
        LutaCega: 4,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 5,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 3,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 6,
        Foco: 0,
        ManobrasEspeciais: "Jump, Throw, Head Butt, Double Hit Kick, Power Uppercut, Buffalo Punch, Shock Treatment, Back Breaker, Slide Kick, Flying Body Spear, Lunging Punch, Dashing Punch, Face Slam, Triple Strike",
        Combos: "Head Butt para Power Uppercut para Back Breaker (Dizzy), Bloqueio para Triple Strike para Throw (Dizzy), Shock Treatment para Slide Kick (Dizzy)",
        Gloria: 7,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return q;
}

let npc = QSF3();

npc = calcPC(npc);
