function AsukaTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Recursos", 2);
    antecedentes[4] = newCaracteristica("Paranormal", 1);

    return {
        Nome: "Asuka Kazama",
        Estilo: "Aikidô",
        Escola: "Dojô Kazama",
        Jogador: "NPC",
        Assinatura: "Bate a poeira das mãos e diz \"Ninguém mexe com Osaka!\"",
        Conceito: "Justiceira de bairro",
        Cronica: "Tekken 5",
        Forca: 3,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 2,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 1,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 2,
        ManobrasEspeciais: "Jump, Kippup, Throw, Punch Defense, Kick Defense, Deflecting Punch, Block And Grab, Arm Wrist Lock, Cross Counter, Esquives, Knife Hand Strike, Double Hit Punch, Foot Sweep, Double Hit Kick, Stepping Front Kick, Lightning Leg",
        Combos: "Punch Defense para Arm Wrist Lock, Kick Defense para Block And Grab, Esquives para Cross Counter, Double Hit Punch para Knife Hand Strike para Foot Sweep, Double Hit Kick para Lightning Leg (Dizzy)",
        Gloria: 4,
        Honra: 7,
        Chi: 5,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
}

function AsukaTk8() {
    const personagem = AsukaTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Bloqueio = 6;
    personagem.Gloria = 5;
    personagem.Honra = 8;
    personagem.Chi = 6;
    personagem.ForcaVontade = 9;
    personagem.Saude = 20;
    personagem.Posto = 7;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = AsukaTk8();
else npc = AsukaTk4();
npc = calcPC(npc);
