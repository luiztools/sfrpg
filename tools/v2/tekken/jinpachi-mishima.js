function JinpachiTk5() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Satsui no Hadou", 5);
    antecedentes[4] = newCaracteristica("Empresário", 5);
    antecedentes[5] = newCaracteristica("Recursos", 5);
    antecedentes[6] = newCaracteristica("Fama", 3);
    antecedentes[7] = newCaracteristica("Staff", 5);

    const personagem = {
        Nome: "Jinpachi Mishima",
        Estilo: "Karatê Shotokan",
        Escola: "Professor Particular",
        Equipe: "Mishima Zaibatsu",
        Jogador: "NPC",
        Assinatura: "Determinação",
        Conceito: "Patriarca possuído por um espírito maligno",
        Cronica: "Tekken 5",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 2,
        Labia: 2,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 0,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 5,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Buffalo Punch, Double Hit Punch, Ducking Fierce, Hurricane Kick, Power Uppercut, Dragon Punch, Head Butt, Spinning Back Fist, Double Hit Kick, Foot Sweep, Throw, Head Butt Grab Attack, Take Down, Brain Cracker, Pile Driver, Suplex, Jump, Kippup, Psychokinetic Channeling, Block And Grab, Cross Counter, Punch Defense, Kick Defense, Deflecting Punch, Zen No Mind",
        Combos: "Double Hit Punch para Power Uppercut para Power Uppercut; Double Hit Punch para Double Hit Punch para Buffalo Punch; Jump Foward para Foot Sweep para Dragon Punch; Fierce para Hurricane Kick para Foot Sweep; Bloqueio para Pile Driver para Foot Sweep",
        Gloria: 8,
        Honra: 3,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

function DevilJinpachi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Satsui no Hadou", 5);
    antecedentes[4] = newCaracteristica("Empresário", 5);
    antecedentes[5] = newCaracteristica("Recursos", 5);
    antecedentes[6] = newCaracteristica("Fama", 3);
    antecedentes[7] = newCaracteristica("Staff", 5);

    const personagem = {
        Nome: "Devil Jinpachi",
        Estilo: "Karatê Shotokan",
        Escola: "Professor Particular",
        Equipe: "Mishima Zaibatsu",
        Jogador: "NPC",
        Assinatura: "Lágrimas de sangue",
        Conceito: "Patriarca possuído por um espírito maligno",
        Cronica: "Tekken 5",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 1,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 2,
        Labia: 2,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 0,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 5,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 6,
        Apresamento: 5,
        Esportes: 5,
        Foco: 6,
        ManobrasEspeciais: "Buffalo Punch, Double Hit Punch, Ducking Fierce, Hurricane Kick, Power Uppercut, Dragon Punch, Head Butt, Spinning Back Fist, Double Hit Kick, Foot Sweep, Throw, Head Butt Grab Attack, Take Down, Brain Cracker, Pile Driver, Suplex, Jump, Kippup, Fireball, Improved Fireball, Yoga Teleport, Psychokinetic Channeling, Block And Grab, Cross Counter, Punch Defense, Kick Defense, Deflecting Punch, Zen No Mind",
        Combos: "Double Hit Punch para Power Uppercut para Power Uppercut; Double Hit Punch para Double Hit Punch para Buffalo Punch; Jump Foward para Foot Sweep para Dragon Punch; Fierce para Hurricane Kick para Foot Sweep; Power Uppercut para Fireball; Yoga Teleport para Improved Fireball; Bloqueio para Pile Driver para Foot Sweep",
        Gloria: 8,
        Honra: 3,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
if (getParameterByName('age') === 'devil') npc = DevilJinpachi();
else npc = JinpachiTk5();

npc = calcPC(npc);
