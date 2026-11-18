function HwoarangTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Sensei", 3);

    const personagem = {
        Nome: "Hwoarang",
        Estilo: "Tae Kwon Dô",
        Escola: "Baek Doo San",
        Jogador: "NPC",
        Assinatura: "Chutes no Ar",
        Conceito: "Militar",
        Cronica: "Tekken 4",
        Equipe: "Exército Coreano",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 2,
        Labia: 2,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 1,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 7,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Jump, Kippup, Double Hit Punch, Triple Strike, Foot Sweep, Ax Kick, Double Dread Kick, Double Hit Kick, Hurricane Kick, Foot Sweep, Slide Kick, Stepping Front Kick, Wounded Knee, Rhino Horn, Throw, Take Down, Psychokinetic Channeling, Kick Defense, Flamingo Stance",
        Combos: "Stepping Front Kick para Double Hit Kick para Rhino Horn; Bloqueio para Hurricane Kick para Rhino Horn; Movimento para Slide Kick para Foot Sweep; Bloqueio para Take Down para Foot Sweep; Double Hit Punch para Triple Strike",
        Gloria: 6,
        Honra: 6,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = HwoarangTk4();

npc = calcPC(npc);