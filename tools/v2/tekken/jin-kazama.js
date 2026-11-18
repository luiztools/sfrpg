function JinTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Devil Gene", 5);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Sensei", 4);

    return {
        Nome: "Jin Kazama",
        Estilo: "Karatê Shotokan",
        Escola: "Dojô Mishima",
        Equipe: "Tekken Force",
        Time: "Tekken Force",
        Jogador: "NPC",
        Assinatura: "Faz um kata",
        Conceito: "Lutador em busca de vingança",
        Cronica: "Tekken 4",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 3,
        Labia: 3,
        LutaCega: 4,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 3,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Double Hit Kick, Slide Kick, Wounded Knee, Power Uppercut, Double Hit Punch, Throw, Pin, Improved Pin, Kick Defense, Punch Defense, Deflecting Punch, Psychokinetic Channeling",
        Combos: "Double Hit Kick para Wounded Knee para Double Hit Kick, Double Hit Kick para Wounded Knee para Roundhouse, Punch Defense para Throw para Slide Kick, Kick Defense para Throw para Slide Kick, Throw para Slide Kick para Pin",
        Gloria: 7,
        Honra: 9,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

function DevilJin() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Devil Gene", 5);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Sensei", 4);
    antecedentes[5] = newCaracteristica("Híbrido Animal", 5);

    return {
        Nome: "Devil Jin",
        Estilo: "Karatê Shotokan",
        Escola: "Dojô Mishima",
        Equipe: "Tekken Force",
        Time: "Tekken Force",
        Jogador: "NPC",
        Assinatura: "Faz um kata",
        Conceito: "Lutador em busca de vingança",
        Cronica: "Tekken 4",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 5,
        Manha: 3,
        Labia: 3,
        LutaCega: 4,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 3,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Double Hit Kick, Slide Kick, Wounded Knee, Power Uppercut, Double Hit Punch, Throw, Pin, Improved Pin, Kick Defense, Punch Defense, Deflecting Punch, Psychokinetic Channeling, Flight, Claw, Bite, Sonic Boom",
        Combos: "Double Hit Kick para Wounded Knee para Double Hit Kick, Double Hit Kick para Wounded Knee para Roundhouse, Punch Defense para Throw para Slide Kick, Kick Defense para Throw para Slide Kick, Throw para Slide Kick para Pin",
        Gloria: 7,
        Honra: 9,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc;
if(getParameterByName('age') === 'devil')
    npc = DevilJin();
else 
    npc = JinTk4();
npc = calcPC(npc);
