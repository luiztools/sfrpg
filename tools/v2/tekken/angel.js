function AngelTk1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Elemental (Luz)", 5);

    return {
        Nome: "Angel",
        Estilo: "Karatê Shotokan",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Abre as asas e paira sobre o oponente derrotado",
        Conceito: "Entidade celestial",
        Cronica: "Tekken 2",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 0,
        Labia: 1,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Double Hit Kick, Double Hit Punch, Power Uppercut, Dragon Punch, Spinning Back Fist, Throw, Take Down, Deflecting Punch, Sonic Boom, Flight, Mu no Hadou, Zen no Mind, Heal",
        Combos: "Double Hit Punch para Double Hit Punch para Power Uppercut, Double Hit Punch para Double Hit Kick para Dragon Punch (Dizzy), Double Hit Kick para Take Down, Spinning Back Fist para Sonic Boom (Dizzy), Foot Sweep para Sonic Boom, Double Hit Punch para Take Down, Deflecting Punch para Throw para Foot Sweep (Dizzy)",
        Gloria: 6,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

function AngelTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Elemental (Luz)", 5);

    return {
        Nome: "Angel",
        Estilo: "Karatê Shotokan",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Abre as asas e paira sobre o oponente derrotado",
        Conceito: "Entidade celestial",
        Cronica: "Tekken Tag Tournament 2",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 0,
        Labia: 1,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Double Hit Kick, Double Hit Punch, Slide Kick, Power Uppercut, Dragon Punch, Spinning Back Fist, Throw, Deflecting Punch, Sonic Boom, Flight, Mu no Hadou, Zen no Mind, Heal",
        Combos: "Double Hit Punch para Double Hit Punch para Power Uppercut, Double Hit Punch para Double Hit Kick para Dragon Punch (Dizzy), Double Hit Kick para Slide Kick, Spinning Back Fist para Sonic Boom (Dizzy), Slide Kick para Sonic Boom, Deflecting Punch para Throw para Foot Sweep (Dizzy)",
        Gloria: 6,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc;
if (getParameterByName('age') === 'tk1')
    npc = AngelTk1();
else
    npc = AngelTk4();
npc = calcPC(npc);
