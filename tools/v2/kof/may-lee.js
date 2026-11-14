function MayLee() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Sensei", 3);

    const personagem = {
        Nome: "May Lee",
        Estilo: "Tae Kwon Dô",
        Escola: "Professor particular",
        Jogador: "NPC",
        Assinatura: "Pose de Sentai",
        Conceito: "Guerreira da justiça",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Korea Justice",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 4,
        Labia: 3,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 3,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Jump, Breakfall, Foot Sweep, Handstand Kick, Air Smash, Scissor Kick, Double Hit Kick, Multiple Stomp, Haymaker, Widowmaker, Hundred Shots, Elemental Explosion, Reverse Frontal Kick, Elemental Rage",
        Combos: "Double Hit Kick para Haymaker; Jumping Forward para Widowmaker; Handstand Kick para Hundred Shots para Elemental Rage (Dizzy)",
        Gloria: 4,
        Honra: 7,
        Chi: 5,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = MayLee();

npc = calcPC(npc);
