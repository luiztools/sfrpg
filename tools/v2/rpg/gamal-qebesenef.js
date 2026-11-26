function GamalQebesenef() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Recursos", 5);
    antecedentes[3] = newCaracteristica("Staff", 4);

    const personagem = {
        Nome: "Gamal Qebesenef",
        Estilo: "Majestic Crow Kung Fu",
        Escola: "Mestre Xaudo",
        Jogador: "NPC",
        Assinatura: "Braços erguidos gargalhando",
        Conceito: "Megalomaníaco",
        Cronica: "O Guerreiro Perfeito",
        Equipe: "A Fênix",
        Time: "",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 5,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 2,
        Labia: 4,
        NovosTalentos: [],
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 3,
        NovasPericias: [],
        Arena: 5,
        Computador: 3,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 4,
        Estilos: 4,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 4,
        NovasTecnicas: [],
        ManobrasEspeciais: "Dragon Punch, Monkey Grab Punch, Hundred Hand Slap, Power Uppercut, Triple Strike, Fireball, Double Dread Kick, Double Hit Kick, Hurricane Kick, Stunning Shout, Stepping Front Kick, Deflecting Punch, Iron Claw, Flying Heel Stomp",
        Combos: "",
        Gloria: 7,
        Honra: 0,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 15,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
npc = GamalQebesenef();

npc = calcPC(npc);
