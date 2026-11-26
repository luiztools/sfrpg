function JeanLeMonte() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Sensei", 4);

    const personagem = {
        Nome: "Jean LeMonte",
        Estilo: "Majestic Crow Kung Fu",
        Escola: "Mestre Xaudo",
        Jogador: "NPC",
        Assinatura: "Sorriso e sinal de positivo",
        Conceito: "Jovem Herói",
        Cronica: "O Guerreiro Perfeito",
        Equipe: "",
        Time: "",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 2,
        NovasPericias: [],
        Arena: 3,
        Computador: 0,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 3,
        Bloqueio: 2,
        Apresamento: 3,
        Esportes: 3,
        Foco: 1,
        NovasTecnicas: [],
        ManobrasEspeciais: "Monkey Grab Punch, Triple Strike, Double Dread Kick, Double Hit Kick, Rising Storm Crow, Throw, Foot Sweep, Air Smash, Jump, Kippup",
        Combos: "Bloqueio para Roundhouse, Movimento para Rising Storm Crow",
        Gloria: 5,
        Honra: 5,
        Chi: 5,
        ForcaVontade: 6,
        Saude: 11,
        Divisao: "Livre",
        Posto: 4
    };
    return personagem;
}

let npc;
npc = JeanLeMonte();

npc = calcPC(npc);
