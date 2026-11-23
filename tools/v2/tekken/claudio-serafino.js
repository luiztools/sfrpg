function ClaudioTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Elemental (Luz)", 4);
    antecedentes[5] = newCaracteristica("Arena", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 2);

    return {
        Nome: "Claudio Serafino",
        Estilo: "Soul Power",
        Escola: "Sirius Marksmen",
        Equipe: "Sirius Marksmen",
        Jogador: "NPC",
        Assinatura: "Ergue o braço direito, onde as marcas de Sirius brilham em azul, e diz: \"Isto não é lugar para amadores.\"",
        Conceito: "Exorcista",
        Cronica: "Tekken 7",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 1,
        Labia: 2,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 1,
        Investigacao: 4,
        Medicina: 1,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Deflecting Punch, Displacement, Knife Hand Strike, Spinning Back Fist, Lunging Punch, Elbow Smash, Power Uppercut, Stepping Front Kick, Double Hit Kick, Reverse Frontal Kick, Ax Kick, Flash Kick, Foot Sweep, Power Up, Flaming Fist, Banishing Flat, Chi Push",
        Combos: "Lunging Punch para Stepping Front Kick, Deflecting Punch para Power Uppercut (Dizzy), Double Hit Kick para Flash Kick (Dizzy), Elbow Smash para Ax Kick, Displacement para Reverse Frontal Kick",
        Gloria: 4,
        Honra: 6,
        Chi: 7,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
}

function ClaudioTk8() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 1);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Elemental (Luz)", 5);
    antecedentes[5] = newCaracteristica("Arena", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Linguística", 2);

    return {
        Nome: "Claudio Serafino",
        Estilo: "Soul Power",
        Escola: "Sirius Marksmen",
        Equipe: "Sirius Marksmen",
        Jogador: "NPC",
        Assinatura: "Ergue o braço direito, onde as marcas de Sirius brilham em azul, e diz: \"Isto não é lugar para amadores.\"",
        Conceito: "Exorcista",
        Cronica: "Tekken 8",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 1,
        Labia: 2,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 1,
        Investigacao: 4,
        Medicina: 1,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 6,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Deflecting Punch, Displacement, Knife Hand Strike, Spinning Back Fist, Lunging Punch, Elbow Smash, Power Uppercut, Stepping Front Kick, Double Hit Kick, Reverse Frontal Kick, Ax Kick, Flash Kick, Foot Sweep, Power Up, Flaming Fist, Banishing Flat, Chi Push, Fireball",
        Combos: "Lunging Punch para Stepping Front Kick, Deflecting Punch para Power Uppercut (Dizzy), Double Hit Kick para Flash Kick (Dizzy), Elbow Smash para Ax Kick, Displacement para Reverse Frontal Kick, Power Uppercut para Fireball",
        Gloria: 6,
        Honra: 7,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
}

let npc;
if (getParameterByName('age') === 'tk8') npc = ClaudioTk8();
else npc = ClaudioTk4();
npc = calcPC(npc);
