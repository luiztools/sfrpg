function KarmanCole() {
    const antecedentes = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const armas = [];
    armas[0] = "Pistola";

    const personagem = {
        Nome: "Karman Cole",
        Estilo: "Kickboxe",
        Escola: "As ruas",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Capanga",
        Cronica: "Art of Fighting 3",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 3,
        Labia: 3,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Reverse Frontal Kick, Foot Sweep, Throw, Brain Cracker, Dashing Punch, Spinning Back Fist",
        Combos: "Jab - Spinning Back Fist (Dizzy); Foot Sweep - Brain Cracker - Brain Cracker (Dizzy); Jab - Brain Cracker (Dizzy)",
        Gloria: 0,
        Honra: 0,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 17,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = KarmanCole();

npc = calcPC(npc);
