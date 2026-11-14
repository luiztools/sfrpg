function KasumiTodoh() {
    const antecedentes = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 3);
    tecnicas[1] = newCaracteristica("Arco", 3);

    const armas = [];
    armas[0] = "Bokken";
    armas[1] = "Yumi";

    const personagem = {
        Nome: "Kasumi Todoh",
        Estilo: "Karatê Rindoukan (Kenjutsu)",
        Escola: "Dojô Todoh",
        Jogador: "NPC",
        Assinatura: "Cumprimento oriental",
        Conceito: "Lutadora Profissional",
        Cronica: "Art of Fighting 3",
        Equipe: "Clã Todoh",
        Time: "Women Fighters",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 1,
        Labia: 1,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 1,
        Computador: 1,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Power Uppercut, Foot Sweep, Fireball, Double Hit Kick",
        Combos: "Fireball - Ultimate Ecstasy Crunch (Dizzy); Bloqueio - Ultimate Ecstasy Crunch; Jab - Power Uppercut - Fireball (Dizzy)",
        Gloria: 0,
        Honra: 0,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = KasumiTodoh();

npc = calcPC(npc);
