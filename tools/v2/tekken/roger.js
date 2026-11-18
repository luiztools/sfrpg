function RogerJrTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Híbrido Animal", 5);

    return {
        Nome: "Roger Jr.",
        Estilo: "Wrestling",
        Escola: "Doutor Bosconovitch",
        Equipe: "Mishima Zaibatsu",
        Jogador: "NPC",
        Assinatura: "Pula de um lado para o outro e bate as luvas",
        Conceito: "Mãe canguru com o filhote na bolsa",
        Cronica: "Tekken Tag Tournament 2",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 0,
        Labia: 0,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
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
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Kippup, Throw, Suplex, Pile Driver, Dislocate Limb, Grappling Defense, Boxing Punches, Double Hit Punch, Power Uppercut, Haymaker, Flying Thrust Kick, Air Smash, Wall Spring, Claw, Tail Slash, Tail Sweep",
        Combos: "Double Hit Punch para Power Uppercut para Haymaker (Dizzy), Bloqueio para Flying Thrust Kick, Air Smash para Pile Driver",
        Gloria: 3,
        Honra: 4,
        Chi: 2,
        ForcaVontade: 4,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
}

function RogerTk1() {
    const roger = RogerJrTk4();
    roger.Nome = "Roger";
    roger.Conceito = "Canguru boxeador";
    roger.Cronica = "Tekken 2";
    roger.Gloria = 2;
    roger.Honra = 3;
    roger.Chi = 1;
    roger.ForcaVontade = 3;
    roger.Posto = 5;
    return roger;
}

let npc;
if (getParameterByName('age') === 'tk1') npc = RogerTk1();
else npc = RogerJrTk4();
npc = calcPC(npc);
