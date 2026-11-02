function SethSF4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 5);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Apoio", 5);
    antecedentes[4] = newCaracteristica("Cibernético", 7);
    antecedentes[5] = newCaracteristica("Staff", 5);

    const seth = {
        Nome: "Seth",
        Estilo: "Jeet Kune Dô",
        Escola: "S.I.N",
        Jogador: "NPC",
        Assinatura: "Tanden Engine",
        Conceito: "Arma Viva",
        Cronica: "Street Fighter 4",
        Equipe: "S.I.N",
        Forca: 6,
        Destreza: 6,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 6,
        Manha: 2,
        Labia: 4,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 5,
        Computador: 4,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 5,
        Estilos: 6,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 6,
        Esportes: 5,
        Foco: 0,
        ManobrasEspeciais: "Tanden Copy, Tanden Vortex, Chi Push, Jump, Power Uppercut, Dragon Punch, Foot Sweep, Flying Heel Stomp, Lightning Leg, Pile Driver, Sonic Boom, Spinning Pile Driver, Throw, Wall Spring, Yoga Teleport, Knee Basher, Spinning Foot Sweep, Dive Kick, Extendible Limbs",
        Combos: "Tanden Vortex para Chi Push; Dragon Punch para Yoga Teleport para Spinning Pile Driver; Yoga Teleport para Spinning Pile Driver; Jump + Roundhouse para Power Uppercut para Lightning Leg (dizzy); Tanden Vortex para Lightning Leg (dizzy)",
        Gloria: 9,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 9
    };
    return calcPC(seth);
}

function SethSF5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Cibernético", 7);

    const seth = {
        Nome: "Doll Unit Zero",
        Estilo: "Jeet Kune Dô",
        Escola: "S.I.N",
        Jogador: "NPC",
        Assinatura: "Tanden Engine",
        Conceito: "Arma Viva",
        Cronica: "Street Fighter 5",
        Equipe: "S.I.N",
        Forca: 7,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 7,
        Raciocinio: 6,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 6,
        Manha: 2,
        Labia: 5,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 5,
        Computador: 4,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 5,
        Estilos: 6,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 5,
        Foco: 0,
        ManobrasEspeciais: "HandStand Kick, Fist Sweep, Jump, Choke Throw, Telekinesis, Stomach Pump, Light Feet, Fist Sweep, Bushin Sempu Kyaku, Spinning Clothesline, Turbo Spinning Clothesline, Fireball, Accuracy, Improved Fireball, Knife Hand Strike, Lunging Punch, Dashing Punch, Ax Kick, Wounded Knee, Double Hit Punch, Triple Strike, Hyper Fist, Yoga Teleport, Dragon Punch, Power Uppercut, Flying Body Spear, Wheel Kick, Chi Push, Power Up, Energy Ball, Tanden Copy, Tanden Vortex",
        Combos: "Dragon Punch para Flying Body Spear (Dizzy), Yoga Teleport para Wheel Kick, Wheel Kick para Yoga Teleport para Power Uppercut (Dizzy); Movimento para Hyper Fist (Dizzy); Movimento para Busin Sempu Kyaku para Roundhouse (Dizzy); Energy Ball para Energy Ball (Dizzy); Double Hit Punch para Telekinesis; Hyper Fist para Dashing Punch (Dizzy); Hyper Fist para Yoga Teleport para Fierce (Dizzy);",
        Gloria: 8,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return calcPC(seth);
}

let npc;
if (getParameterByName('age') === 'sf5')
    npc = SethSF5();
else
    npc = SethSF4();
npc = calcPC(npc);