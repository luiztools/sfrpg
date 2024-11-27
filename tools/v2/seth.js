function Seth() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 6);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Recursos", 6);
    antecedentes[3] = newCaracteristica("Apoio", 6);
    antecedentes[4] = newCaracteristica("Cibernético", 7);
    antecedentes[5] = newCaracteristica("Staff", 5);

    var seth =
    {
        Nome: "Seth",
        Estilo: "Jeet Kune Dô",
        Escola: "S.I.N",
        Conceito: "arma viva",
        Assinatura: "Tanden Engine",
        Jogador: "NPC",
        Equipe: "S.I.N",
        Cronica: "Street Fighter 4",
        Forca: 6,
        Destreza: 6,
        Vigor: 6,
        Carisma: 5,
        Manipulacao: 5,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 4,
        Interrogacao: 5,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 3,
        Labia: 4,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 4,
        Furtividade: 1,
        Sobrevivencia: 1,
        Arena: 5,
        Computador: 4,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 6,
        Estilos: 7,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 6,
        Esportes: 5,
        Foco: 0,
        ManobrasEspeciais: "Extendible Limbs, Throw, Jump, Stepping Front Kick, Flying Heel Stomp, Sonic Boom, Flying Thrust kick, Foot Sweep, Spinning Foot Sweep, Tanden Engine, Elbow Smash, Yoga Teleport, Ax Kick, Air Smash, Lightning Leg, Dragon Punch, Pile Driver, Spinning Pile Driver, Stomach Pump, Tanden Storm, Fireball, Tanden Stream, Wall Spring, Capture Kick, Power Uppercut",
        Combos: "Jump + Roundhouse para Fierce para Dragon Punch (Dizzy); Foot Sweep para Ax Kick (Dizzy); Tanden Engine para Fierce para Improved Fireball (Dizzy); Yoga Teleport para Spinning Pile Driver; Jump + Roundhouse para Power Uppercut para Lightning Leg (Dizzy); Power Uppercut para Tandem Stream para Lightning Leg (Dizzy)",
        Gloria: 1,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 0
    };
    return calcPC(seth);
}

const npc = Seth();