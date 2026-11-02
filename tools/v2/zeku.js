function ZekuOld() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 4);
    antecedentes[2] = newCaracteristica("Apoio", 4);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Recursos", 3);
    antecedentes[5] = newCaracteristica("Sensei", 5);
    antecedentes[6] = newCaracteristica("Herança de Clã", 4);
    
    const guy = {
        Nome: "Zeku",
        Estilo: "Ninjitsu",
        Escola: "Bushinryu Ninpou",
        Jogador: "NPC",
        Assinatura: "Olhar sereno",
        Conceito: "Ninja",
        Cronica: "Street Fighter 5",
        Time: "",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 6,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 5,
        Labia: 4,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 6,
        Sobrevivencia: 5,
        Arena: 5,
        Computador: 1,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 6,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Foot Sweep, Sonic Scythe, Jump, Flying Knee Thrust, Flash Kick, Slide Kick, Rekka Ken, Bushin Musou Renge, Wheel Kick, Knee Basher, Power Uppercut, Shrouded Moon, Triple Strike, Spinning Back Fist,  Elbow Smash, Flying Heel Stomp, Tameshiwari",
        Combos: "Power Uppercut para Shrouded Moon para Flying Heel Stomp; Forward para Rekka Ken; Rekka Ken para Shrouded Moon para Rekka Ken; Shrouded Moon para Triple Strike para Wheel Kick; Double Hit Punch para Rekka Ken;Rekkaken (3x); Rekka Ken para Power Uppercut para Roundhouse; Hyper Tackle para Power Uppercut",
        Gloria: 7,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return guy;
}

function ZekuYoung() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Arena", 4);
    antecedentes[2] = newCaracteristica("Apoio", 4);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Recursos", 3);
    antecedentes[5] = newCaracteristica("Sensei", 5);
    antecedentes[6] = newCaracteristica("Herança de Clã", 4);
    
    const guy = {
        Nome: "Zeku",
        Estilo: "Ninjitsu",
        Escola: "Bushinryu Ninpou",
        Jogador: "NPC",
        Assinatura: "Olhar sereno",
        Conceito: "Ninja",
        Cronica: "Street Fighter 5",
        Time: "",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 6,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 5,
        Labia: 4,
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 6,
        Sobrevivencia: 5,
        Arena: 5,
        Computador: 1,
        Investigacao: 3,
        Medicina: 3,
        Misterios: 6,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 6,
        Foco: 4,
        ManobrasEspeciais: "Forward Backflip Kick, Sonic Scythe, Jump, Wall Spring, Throw, Flying Knee Thrust, Slide Kick, Elbow Smash, Rekka Ken, Bushin Musou Renge, Wheel Kick, Flying Heel Stomp, Shrouded Moon, Triple Strike, Double Hit Punch, Power Uppercut, Thigh Press, Wall Spring, Hyper Tackle, Tameshiwari, Light Feet, Ax Kick, Air Throw",
        Combos: "Power Uppercut para Shrouded Moon para Flying Heel Stomp; Forward para Rekka Ken; Rekka Ken para Shrouded Moon para Rekka Ken; Shrouded Moon para Triple Strike para Wheel Kick; Double Hit Punch para Rekka Ken;Rekkaken (3x); Rekka Ken para Power Uppercut para Roundhouse; Hyper Tackle para Power Uppercut",
        Gloria: 7,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return guy;
}

let npc;
if (getParameterByName('age') === 'sfa')
    npc = ZekuYoung();
else
    npc = ZekuOld();
npc = calcPC(npc);