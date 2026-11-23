function ArmorKingTk1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 3);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Aliados", 2);

    return {
        Nome: "Armor King",
        Estilo: "Lucha Libre",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Rugido de jaguar sobre o oponente caído",
        Conceito: "Lutador Mascarado",
        Cronica: "Tekken",
        Forca: 6,
        Destreza: 4,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 0,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 4,
        Labia: 1,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Buffalo Punch, Jumping Hammer Punch, Power Uppercut, Double Hit Punch, Elbow Smash, Head Butt, Dashing Clothesline, Wounded Knee, Foot Sweep, Slide Kick, Knee Basher, Block And Grab, Back Breaker, Dislocate Limb, Grappling Defense, Pin, Pile Driver, Power Bomb, Suplex, Jump, Multiple Stomp, Flying Body Spear, Kippup",
        Combos: "Power Uppercut para Dashing Clothesline, Elbow Smash para Power Bomb, Bloqueio para Block And Grab para Pile Driver, Jump para Multiple Stomp, Dislocate Limb para Back Breaker",
        Gloria: 6,
        Honra: 2,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

function ArmorKingIITk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 2);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Aliados", 2);
    antecedentes[5] = newCaracteristica("Elemental (Fogo)", 3);

    return {
        Nome: "Armor King II",
        Estilo: "Lucha Libre",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Cospe névoa venenosa para o alto e ruge sobre o oponente caído",
        Conceito: "Vingador Mascarado",
        Cronica: "Tekken 5",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 0,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 4,
        Labia: 1,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Buffalo Punch, Jumping Hammer Punch, Power Uppercut, Double Hit Punch, Elbow Smash, Head Butt, Dashing Clothesline, Wounded Knee, Foot Sweep, Slide Kick, Knee Basher, Block And Grab, Back Breaker, Dislocate Limb, Grappling Defense, Pin, Pile Driver, Power Bomb, Suplex, Jump, Multiple Stomp, Flying Body Spear, Kippup, Blind, Flaming Fist, Fire Strike",
        Combos: "Power Uppercut para Dashing Clothesline, Elbow Smash para Power Bomb, Bloqueio para Block And Grab para Pile Driver, Jump para Multiple Stomp, Dislocate Limb para Back Breaker, Blind para Power Bomb, Dashing Clothesline para Fire Strike",
        Gloria: 7,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
}

function ArmorKingIITk8() {
    const personagem = ArmorKingIITk4();
    personagem.Cronica = "Tekken 8";
    personagem.Apresamento = 7;
    personagem.Gloria = 8;
    personagem.Chi = 6;
    personagem.ForcaVontade = 10;
    personagem.Saude = 20;
    personagem.Posto = 9;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk4') npc = ArmorKingIITk4();
else if (getParameterByName('age') === 'tk8') npc = ArmorKingIITk8();
else npc = ArmorKingTk1();
npc = calcPC(npc);
