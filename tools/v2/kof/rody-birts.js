function RodyBirts() {
    const antecedentes = [];

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 5);
    tecnicas[1] = newCaracteristica("Armas de Fogo", 5);

    const armas = [];
    armas[0] = "Tonfa";
    armas[1] = "Pistola Pesada";

    const personagem = {
        Nome: "Rody Birts",
        Estilo: "Forças Especiais (Bojutsu)",
        Escola: "Polícia de South Town",
        Jogador: "NPC",
        Assinatura: "\"Você tem o direito de permanecer calado...\"",
        Conceito: "Policial",
        Cronica: "Art of Fighting 3",
        Forca: 5,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 2,
        LutaCega: 1,
        Conducao: 4,
        Lideranca: 1,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 2,
        Computador: 2,
        Investigacao: 4,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Breakfall, Double Hit Knee, Double Hit Punch, Hyper Fist, Power Uppercut, Throw",
        Combos: "Tonfa Strong - Tonfa Fierce; Aparar (Tonfa) - Ataque Furioso (Tonfa)",
        Gloria: 0,
        Honra: 0,
        Chi: 3,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = RodyBirts();

npc = calcPC(npc);
