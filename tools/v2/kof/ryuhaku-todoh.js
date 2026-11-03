function RyuhakuTodoh() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 3);
    antecedentes[1] = newCaracteristica("Fama", 1);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 4);

    const armas = [];
    armas[0] = "Bokken";

    const personagem = {
        Nome: "Ryuhaku Todoh",
        Estilo: "Karatê Rindoukan (Kenjutsu)",
        Escola: "Dojô Todoh",
        Jogador: "NPC",
        Assinatura: "Cumprimento oriental",
        Conceito: "Mestre de Arte Marcial",
        Cronica: "Art of Fighting",
        Equipe: "Clã Todoh",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 3,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 1,
        Labia: 3,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 0,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 4,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 3,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Power Uppercut, Foot Sweep, Fireball, Double Hit Kick",
        Combos: "Fireball - Fireball (Dizzy); Bloqueio - Fireball; Jab - Power Uppercut - Fireball (Dizzy)",
        Gloria: 5,
        Honra: 2,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = RyuhakuTodoh();

npc = calcPC(npc);
