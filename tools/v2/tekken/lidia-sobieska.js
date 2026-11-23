function LidiaTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Fama", 4);
    antecedentes[4] = newCaracteristica("Recursos", 4);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 3);
    conhecimentos[1] = newCaracteristica("Linguística", 2);

    return {
        Nome: "Lidia Sobieska",
        Estilo: "Karatê Shotokan",
        Escola: "Dojô tradicional na Polônia",
        Jogador: "NPC",
        Assinatura: "Encerra a luta com uma reverência em kamae e ajeita o rabo de cavalo",
        Conceito: "Primeira-ministra guerreira",
        Cronica: "Tekken 7",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 1,
        Labia: 5,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 2,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 3,
        Esportes: 5,
        Foco: 4,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Kippup, Throw, Stepping Front Kick, Lunging Punch, Dashing Punch, Shikan Ken, Elbow Smash, Knife Hand Strike, Shuto, Power Uppercut, Tameshiwari, Ax Kick, Reverse Frontal Kick, Double Hit Kick, Power Kick, Foot Sweep, Punch Defense, Kick Defense, Displacement, Maka Wara",
        Combos: "Lunging Punch para Stepping Front Kick (Dizzy), Displacement para Shikan Ken, Punch Defense para Dashing Punch, Double Hit Kick para Ax Kick (Dizzy)",
        Gloria: 5,
        Honra: 8,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 7
    };
}

function LidiaTk8() {
    const personagem = LidiaTk4();
    personagem.Cronica = "Tekken 8";
    personagem.Antecedentes[3] = newCaracteristica("Fama", 5);
    personagem.Soco = 6;
    personagem.Chute = 6;
    personagem.ManobrasEspeciais += ", Lightning Leg";
    personagem.Combos += ", Knife Hand Strike para Shuto para Power Kick";
    personagem.Gloria = 6;
    personagem.Honra = 9;
    personagem.Chi = 6;
    personagem.ForcaVontade = 10;
    personagem.Saude = 20;
    personagem.Posto = 8;
    return personagem;
}

let npc;
if (getParameterByName('age') === 'tk8') npc = LidiaTk8();
else npc = LidiaTk4();
npc = calcPC(npc);
