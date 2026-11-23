function LeoTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 2);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    return {
        Nome: "Leo Kliesen",
        Estilo: "Kung Fu",
        Escola: "Bajiquan",
        Jogador: "NPC",
        Assinatura: "Ajusta as luvas, firma os pés numa base baixa e diz: \"Eu só quero a verdade.\"",
        Conceito: "Investigador em busca do assassino da mãe",
        Cronica: "Tekken 6",
        Forca: 4,
        Destreza: 5,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 2,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 3,
        Investigacao: 4,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 2,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Punch Defense, Deflecting Punch, Esquives, Flamingo Stance, Elbow Smash, Houzantou, Senkju Tai, Shikan Ken, Power Uppercut, Reaping Palm, Hyper Tackle, Rekka Ken, Knee Basher, Foot Sweep",
        Combos: "Jab para Elbow Smash para Houzantou (Dizzy), Shikan Ken para Power Uppercut, Elbow Smash para Senkju Tai (Dizzy), Deflecting Punch para Reaping Palm, Esquives para Hyper Tackle",
        Gloria: 3,
        Honra: 6,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Livre",
        Posto: 4
    };
}

function LeoTk8() {
    const personagem = LeoTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Bloqueio = 5;
    personagem.Gloria = 4;
    personagem.Honra = 7;
    personagem.Chi = 5;
    personagem.ForcaVontade = 8;
    personagem.Saude = 20;
    personagem.Posto = 5;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = LeoTk8();
else npc = LeoTk4();
npc = calcPC(npc);
