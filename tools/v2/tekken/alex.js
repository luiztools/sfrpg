function AlexTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Híbrido Animal", 5);

    return {
        Nome: "Alex",
        Estilo: "Wrestling",
        Escola: "Doutor Bosconovitch",
        Equipe: "Mishima Zaibatsu",
        Jogador: "NPC",
        Assinatura: "Ruge e sacode a cauda",
        Conceito: "Dinossauro clonado",
        Cronica: "Tekken Tag Tournament 2",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 1,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 0,
        Labia: 0,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Kippup, Throw, Suplex, Pile Driver, Dislocate Limb, Grappling Defense, Slide Kick, Air Smash, Wall Spring, Pounce, Claw, Bite, Tail Slash",
        Combos: "Pounce para Bite, Air Smash para Pile Driver, Dislocate Limb para Suplex",
        Gloria: 3,
        Honra: 4,
        Chi: 2,
        ForcaVontade: 4,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
}

function AlexTk1() {
    const alex = AlexTk4();
    alex.Cronica = "Tekken 2";
    alex.Gloria = 2;
    alex.Honra = 3;
    alex.Chi = 1;
    alex.ForcaVontade = 3;
    alex.Posto = 5;
    return alex;
}

let npc;
if (getParameterByName('age') === 'tk1') npc = AlexTk1();
else npc = AlexTk4();
npc = calcPC(npc);
