function BobTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 2);
    antecedentes[1] = newCaracteristica("Fama", 3);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    return {
        Nome: "Bob",
        Estilo: "Karatê Rindoukan",
        Escola: "Freestyle Karate",
        Jogador: "NPC",
        Assinatura: "Dá um giro rápido no lugar, bate na barriga e diz: \"A combinação perfeita de velocidade e peso!\"",
        Conceito: "Prodígio do karatê que engordou para ganhar força",
        Cronica: "Tekken 6",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 3,
        Labia: 3,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 1,
        Arena: 3,
        Computador: 1,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 1,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Punch Defense, Esquives, Light Feet, Double Hit Punch, Spinning Back Fist, Power Uppercut, Dashing Uppercut, Hyper Tackle, Rolling Attack, Whirlwind Kick, Spinning Foot Sweep, Foot Sweep, Cartwheel Kick",
        Combos: "Double Hit Punch para Spinning Back Fist (Dizzy), Esquives para Dashing Uppercut, Spinning Foot Sweep para Rolling Attack, Jab para Jab para Power Uppercut",
        Gloria: 5,
        Honra: 6,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
}

function SlimBob() {
    const npc = BobTk4();
    npc.Nome = "Slim Bob";
    npc.Conceito = "Prodígio do karatê, leve e veloz";
    npc.Assinatura = "Gira no lugar, ajeita o cabelo e sorri: \"Rápido demais pra você?\"";
    npc.Cronica = "Tekken Tag Tournament 2";
    npc.Forca = 4;
    npc.Destreza = 6;
    npc.Vigor = 4;
    npc.Aparencia = 4;
    npc.Esportes = 6;
    npc.Saude = 18;
    npc.ManobrasEspeciais = "Jump, Kippup, Breakfall, Throw, Punch Defense, Esquives, Light Feet, Double Hit Punch, Spinning Back Fist, Power Uppercut, Dashing Uppercut, Rolling Attack, Whirlwind Kick, Spinning Foot Sweep, Foot Sweep, Cartwheel Kick, Backflip Kick";
    npc.Combos = "Double Hit Punch para Spinning Back Fist (Dizzy), Esquives para Dashing Uppercut, Spinning Foot Sweep para Rolling Attack, Cartwheel Kick para Backflip Kick";
    return npc;
}

let npc;
if (getParameterByName('age') === 'slim') npc = SlimBob();
else npc = BobTk4();
npc = calcPC(npc);
