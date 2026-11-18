function KazuyaTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Devil Gene", 5);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Sensei", 5);

    return {
        Nome: "Kazuya Mishima",
        Estilo: "Karatê Shotokan",
        Escola: "Heihachi Mishima",
        Equipe: "G Corporation",
        Time: "G Corporation",
        Jogador: "NPC",
        Assinatura: "Determinação",
        Conceito: "Lutador em busca de vingança",
        Cronica: "Tekken 4",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 4,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Double Hit Kick, Double Hit Punch, Power Uppercut, Dragon Punch, Head Butt, Spinning Back Fist, Throw, Head Butt Grab Attack, Take Down, Psychokinetic Channeling",
        Combos: "Double Hit Punch para Double Hit Punch para Head Butt Grab Attack, Double Hit Punch para Double Hit Punch para Spinning Back Fist, Double Hit Punch para Double Hit Kick para Dragon Punch, Double Hit Punch para Double Hit Kick para Roundhouse, Bloqueio para Throw para Foot Sweep",
        Gloria: 9,
        Honra: 6,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

function DevilKazuya() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 4);
    antecedentes[2] = newCaracteristica("Devil Gene", 5);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Sensei", 5);
    antecedentes[6] = newCaracteristica("Híbrido Animal", 5);

    return {
        Nome: "Devil Kazuya",
        Estilo: "Karatê Shotokan",
        Escola: "Heihachi Mishima",
        Equipe: "G Corporation",
        Time: "G Corporation",
        Jogador: "NPC",
        Assinatura: "Determinação",
        Conceito: "Lutador em busca de vingança",
        Cronica: "Tekken 4",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 4,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Double Hit Kick, Double Hit Punch, Power Uppercut, Dragon Punch, Head Butt, Spinning Back Fist, Throw, Head Butt Grab Attack, Take Down, Psychokinetic Channeling, Flight, Bite, Claw, Sonic Boom",
        Combos: "Double Hit Punch para Double Hit Punch para Head Butt Grab Attack, Double Hit Punch para Double Hit Punch para Spinning Back Fist, Double Hit Punch para Double Hit Kick para Dragon Punch, Double Hit Punch para Double Hit Kick para Roundhouse, Bloqueio para Throw para Foot Sweep",
        Gloria: 9,
        Honra: 6,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc;
if(getParameterByName('age') === 'devil')
    npc = DevilKazuya();
else 
    npc = KazuyaTk4();
npc = calcPC(npc);
