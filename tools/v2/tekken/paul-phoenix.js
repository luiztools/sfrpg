function PaulTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 2);
    antecedentes[5] = newCaracteristica("Sensei", 3);

    return {
        Nome: "Paul Phoenix",
        Estilo: "Karatê Rindoukan",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Levanta os braços e comemora a vitória",
        Conceito: "Andarilho",
        Cronica: "Tekken 4",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 1,
        Interrogacao: 3,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 3,
        Labia: 2,
        LutaCega: 3,
        Conducao: 4,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 4,
        ManobrasEspeciais: "Power Uppercut, Double Hit Punch, Dashing Punch, Triple Strike, Double Hit Kick, Foot Sweep, Spinning Foot Sweep, Slide Kick, Wounded Knee, Kick Defense, Punch Defense, Block And Grab, Grappling Defense, Throw, Back Roll Throw, Pin, Improved Pin, Dislocate Limb, Flying Tackle, Jump, Kippup, Drunken Monkey Roll, Hyper Tackle, Tameshiwari, Psychokinetic Channeling",
        Combos: "Double Hit Punch para Double Hit Punch para Dashing Punch, Jump para Double Hit Kick para Roundhouse, Bloqueio para Block And Grab para Improved Pin, Bloqueio para Tameshiwari, Movimento para Hyper Tackle",
        Gloria: 9,
        Honra: 7,
        Chi: 6,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

function PaulTk1() {
    const personagem = PaulTk4();
    personagem.Cronica = "Tekken 2";
    personagem.Gloria = 8;
    personagem.Honra = 6;
    personagem.Chi = 5;
    personagem.ForcaVontade = 8;
    personagem.Saude = 18;
    personagem.Posto = 7;
    return personagem;
}

function PaulTk8() {
    const personagem = PaulTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Soco = 6;
    personagem.Gloria = 10;
    personagem.Honra = 8;
    personagem.Chi = 7;
    personagem.ForcaVontade = 10;
    personagem.Saude = 20;
    personagem.Posto = 9;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk1') npc = PaulTk1();
else if (getParameterByName('age') === 'tk8') npc = PaulTk8();
else npc = PaulTk4();
npc = calcPC(npc);
