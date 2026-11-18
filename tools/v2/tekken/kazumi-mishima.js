function KazumiBase(nome, antecedentes, manobras) {
    return {
        Nome: nome,
        Estilo: "Karatê Shotokan",
        Escola: "Jinpachi Mishima",
        Jogador: "NPC",
        Assinatura: "Junta as mãos diante do peito e se curva com elegância",
        Conceito: "Assassina do clã Hachijo",
        Cronica: "Tekken 7",
        Forca: 3,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 2,
        Labia: 3,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 0,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: manobras,
        Combos: "Flicker Jab para Knife Hand Strike para Lightning Leg, Double Hit Punch para Stepping Front Kick, Punch Defense para Flicker Jab para Foot Sweep, Knife Hand Strike para Double Hit Kick (Dizzy)",
        Gloria: 6,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

const manobrasKazumi = "Jump, Kippup, Flicker Jab, Knife Hand Strike, Double Hit Punch, Power Uppercut, Double Hit Kick, Stepping Front Kick, Lightning Leg, Foot Sweep, Throw, Punch Defense, Kick Defense, Psychokinetic Channeling";

function KazumiTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Devil Gene", 5);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Sensei", 5);
    antecedentes[5] = newCaracteristica("Mascote", 4);
    return KazumiBase("Kazumi Mishima", antecedentes, manobrasKazumi);
}

function DevilKazumi() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Devil Gene", 5);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Sensei", 5);
    antecedentes[5] = newCaracteristica("Mascote", 4);
    antecedentes[6] = newCaracteristica("Híbrido Animal", 5);
    return KazumiBase("Devil Kazumi", antecedentes, manobrasKazumi + ", Flight, Claw, Bite");
}

let npc;
if (getParameterByName('age') === 'devil')
    npc = DevilKazumi();
else
    npc = KazumiTk4();
npc = calcPC(npc);
