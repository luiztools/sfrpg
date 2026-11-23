function FengTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 1);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 1);

    return {
        Nome: "Feng Wei",
        Estilo: "Kung Fu (Kenpo)",
        Escola: "Punho Divino (Shinken)",
        Equipe: "G Corporation",
        Time: "G Corporation",
        Jogador: "NPC",
        Assinatura: "Encara o adversário caído e diz \"Fraco demais.\"",
        Conceito: "Andarilho em busca do poder absoluto",
        Cronica: "Tekken 5",
        Forca: 5,
        Destreza: 4,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 3,
        Labia: 1,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 3,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Punch Defense, Kick Defense, Deflecting Punch, Cross Counter, Esquives, Empty Step, Elbow Smash, Knife Hand Strike, Reaping Palm, Buffalo Punch, Power Uppercut, Spinning Back Fist, Hyper Tackle, Double Hit Kick, Wounded Knee, Foot Sweep",
        Combos: "Jab para Elbow Smash para Buffalo Punch (Dizzy), Elbow Smash para Reaping Palm (Dizzy), Esquives para Hyper Tackle, Deflecting Punch para Cross Counter, Wounded Knee para Spinning Back Fist",
        Gloria: 6,
        Honra: 2,
        Chi: 6,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

function FengTk8() {
    const personagem = FengTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Bloqueio = 5;
    personagem.Gloria = 7;
    personagem.Chi = 7;
    personagem.ForcaVontade = 10;
    personagem.Saude = 20;
    personagem.Posto = 8;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = FengTk8();
else npc = FengTk4();
npc = calcPC(npc);
