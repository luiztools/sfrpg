function BruceTk1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);

    return {
        Nome: "Bruce Irvin",
        Estilo: "Thai Kickboxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Dá uma joelhada no ar e encara o oponente caído",
        Conceito: "Guarda-costas",
        Cronica: "Tekken 2",
        Equipe: "G Corporation",
        Time: "G Corporation",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 4,
        Labia: 1,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 2,
        ManobrasEspeciais: "Jump, Kippup, Triple Strike, Elbow Smash, Power Uppercut, Double Hit Kick, Stepping Front Kick, Wheel Kick, Foot Sweep, Wounded Knee, Tiger Knee, Double Hit Knee, Throw, Knee Basher, Kick Defense",
        Combos: "Triple Strike para Elbow Smash; Elbow Smash 2x para Tiger Knee (Dizzy); Wounded Knee para Stepping Front Kick; Throw para Knee Basher",
        Gloria: 5,
        Honra: 2,
        Chi: 2,
        ForcaVontade: 6,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

function BruceTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);

    return {
        Nome: "Bruce Irvin",
        Estilo: "Thai Kickboxe",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Dá uma joelhada no ar e encara o oponente caído",
        Conceito: "Mercenário",
        Cronica: "Tekken 6",
        Equipe: "G Corporation",
        Time: "G Corporation",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 4,
        Labia: 1,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 4,
        Computador: 1,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        NovosTalentos: talentos,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 2,
        ManobrasEspeciais: "Jump, Kippup, Triple Strike, Elbow Smash, Power Uppercut, Double Hit Kick, Stepping Front Kick, Wheel Kick, Foot Sweep, Wounded Knee, Tiger Knee, Double Hit Knee, Flying Knee Thrust, Throw, Clinch, Knee Basher, Kick Defense, Maka Wara",
        Combos: "Triple Strike para Elbow Smash; Elbow Smash 2x para Tiger Knee (Dizzy); Wounded Knee para Stepping Front Kick; Clinch para Knee Basher (Dizzy); Bloqueio para Flying Knee Thrust",
        Gloria: 6,
        Honra: 3,
        Chi: 3,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc;
if (getParameterByName('age') === 'tk1') npc = BruceTk1();
else npc = BruceTk4();
npc = calcPC(npc);
