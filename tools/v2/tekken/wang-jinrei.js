function WangTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);

    return {
        Nome: "Wang Jinrei",
        Estilo: "Tai Chi Chuan",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Afagar a longa barba",
        Conceito: "Mestre ancião",
        Cronica: "Tekken 5",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 5,
        Manha: 2,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 1,
        Medicina: 4,
        Misterios: 3,
        Estilos: 5,
        Antecedentes: antecedentes,
        NovosTalentos: talentos,
        Soco: 5,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Jump, Throw, Kippup, Breakfall, Empty Step, Foot Sweep, Wounded Knee, Ear Pop, Monkey Grab Punch, Spinning Back Fist, Elbow Smash, Knife Hand Strike, Reaping Palm, Jumping Shoulder Butt, Deflecting Punch, Punch Defense, Kick Defense, Block And Grab, Back Roll Throw, Dislocate Limb, Grappling Defense, Psychokinetic Channeling",
        Combos: "Jab para Elbow Smash para Reaping Palm (Dizzy), Wounded Knee para Spinning Back Fist, Monkey Grab Punch para Jumping Shoulder Butt, Bloqueio para Back Roll Throw",
        Gloria: 4,
        Honra: 8,
        Chi: 9,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
}

function WangTk1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);

    return {
        Nome: "Wang Jinrei",
        Estilo: "Tai Chi Chuan",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Afagar a longa barba",
        Conceito: "Mestre ancião",
        Cronica: "Tekken",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 5,
        Manha: 2,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 1,
        Medicina: 4,
        Misterios: 3,
        Estilos: 5,
        Antecedentes: antecedentes,
        NovosTalentos: talentos,
        Soco: 5,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Jump, Throw, Kippup, Breakfall, Empty Step, Foot Sweep, Wounded Knee, Ear Pop, Monkey Grab Punch, Spinning Back Fist, Elbow Smash, Reaping Palm, Jumping Shoulder Butt, Deflecting Punch, Punch Defense, Kick Defense, Back Roll Throw, Dislocate Limb, Grappling Defense, Psychokinetic Channeling",
        Combos: "Jab para Elbow Smash para Reaping Palm (Dizzy), Wounded Knee para Spinning Back Fist, Bloqueio para Back Roll Throw",
        Gloria: 3,
        Honra: 7,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

let npc;
if (getParameterByName('age') === 'tk1') npc = WangTk1();
else npc = WangTk4();

npc = calcPC(npc);
