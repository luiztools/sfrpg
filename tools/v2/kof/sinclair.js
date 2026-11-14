function Sinclair() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 6);

    const armas = [];
    armas[0] = "Cimitarra";

    const personagem = {
        Nome: "Sinclair",
        Estilo: "Baraqah (Kenjutsu)",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Demonstra golpes com sua espada",
        Conceito: "Capanga",
        Cronica: "Art of Fighting 3",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 2,
        Perspicacia: 2,
        Manha: 4,
        Labia: 4,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 1,
        Investigacao: 4,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Fist Sweep, Hundred Hand Slap, Power Uppercut, Foot Sweep, Slide Kick, Breakfall",
        Combos: "Cimitarra Jab - Hundred Hand Slap - Hundred Hand Slap (Dizzy); Aparar - Power Uppercut",
        Gloria: 6,
        Honra: 3,
        Chi: 2,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = Sinclair();

npc = calcPC(npc);
