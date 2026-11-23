function LeroyTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 3);
    antecedentes[1] = newCaracteristica("Mascote", 1);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Finanças", 2);
    conhecimentos[1] = newCaracteristica("Linguística", 2);

    return {
        Nome: "Leroy Smith",
        Estilo: "Kung Fu (Wing Chun)",
        Escola: "Mestre de Wing Chun em Hong Kong",
        Jogador: "NPC",
        Assinatura: "Estende a mão aberta e chama o adversário com um leve gesto dos dedos, sem tirar os óculos escuros",
        Conceito: "Mestre recluso",
        Cronica: "Tekken 7",
        Forca: 3,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 6,
        Inteligencia: 3,
        Raciocinio: 6,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 4,
        Labia: 1,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 2,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 3,
        Bloqueio: 7,
        Apresamento: 3,
        Esportes: 5,
        Foco: 3,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Throw, Dislocate Limb, Punch Defense, Kick Defense, Deflecting Punch, Displacement, Cross Counter, Hundred Hand Slap, Rekka Ken, Lunging Punch, Knife Hand Strike, Elbow Smash, Shikan Ken, Foot Sweep, Stepping Front Kick",
        Combos: "Punch Defense para Cross Counter, Deflecting Punch para Elbow Smash, Jab para Jab para Hundred Hand Slap (Dizzy), Displacement para Knife Hand Strike, Lunging Punch para Rekka Ken",
        Gloria: 3,
        Honra: 7,
        Chi: 6,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

function LeroyTk8() {
    const personagem = LeroyTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Antecedentes[3] = newCaracteristica("Fama", 2);
    personagem.Percepcao = 7;
    personagem.Soco = 7;
    personagem.Bloqueio = 8;
    personagem.ManobrasEspeciais += ", Dashing Punch, Spinning Back Fist";
    personagem.Combos += ", Dashing Punch para Hundred Hand Slap";
    personagem.Gloria = 5;
    personagem.Honra = 8;
    personagem.Chi = 7;
    personagem.ForcaVontade = 10;
    personagem.Saude = 20;
    personagem.Posto = 8;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = LeroyTk8();
else npc = LeroyTk4();
npc = calcPC(npc);
