function LawTk1() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 1);

    return {
        Nome: "Marshall Law",
        Estilo: "Kung Fu",
        Escola: "Dojô da família",
        Jogador: "NPC",
        Assinatura: "Grita e contrai os músculos",
        Conceito: "Cozinheiro",
        Cronica: "Tekken",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Flash Kick, Kick Defense, Punch Defense, Deflecting Punch, Brain Cracker, Knee Basher, Double Hit Punch, Double Hit Kick",
        Combos: "Double Hit Punch para Double Hit Punch para Fierce, Double Hit Kick para Double Hit Kick para Roundhouse, Bloqueio para Brain Cracker para Foot Sweep, Flash Kick para Flash Kick",
        Gloria: 7,
        Honra: 7,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

function LawTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Staff", 5);

    return {
        Nome: "Marshall Law",
        Estilo: "Kung Fu",
        Escola: "Dojô da família",
        Jogador: "NPC",
        Assinatura: "Grita e contrai os músculos",
        Conceito: "Mestre",
        Cronica: "Tekken 4",
        Forca: 5,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 3,
        Labia: 3,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 4,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Flash Kick, Kick Defense, Punch Defense, Deflecting Punch, Brain Cracker, Knee Basher, Psychokinetic Channeling, Double Hit Punch, Double Hit Kick",
        Combos: "Double Hit Punch para Double Hit Punch para Fierce, Double Hit Kick para Double Hit Kick para Roundhouse, Bloqueio para Brain Cracker para Foot Sweep, Bloqueio para Psychokinetic Channeling, Flash Kick para Flash Kick para Flash Kick",
        Gloria: 8,
        Honra: 8,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
}

function LawTk8() {
    const personagem = LawTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Chute = 7;
    personagem.Gloria = 9;
    personagem.Honra = 9;
    personagem.Chi = 10;
    personagem.ForcaVontade = 10;
    personagem.Saude = 20;
    personagem.Posto = 9;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk1') npc = LawTk1();
else if (getParameterByName('age') === 'tk8') npc = LawTk8();
else npc = LawTk4();
npc = calcPC(npc);
