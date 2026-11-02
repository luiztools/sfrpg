
function Midnight() {
    const personagem = {
        Nome: "Midnight",
        Estilo: "Ninjitsu",
        Assinatura: "Some em uma nuvem de fumaça",
        Conceito: "Ator",
        Forca: 2,
        Destreza: 3,
        Vigor: 3,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 2,
        Labia: 4,
        NovosTalentos: [],
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 3,
        NovasPericias: [],
        Arena: 3,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 4,
        Estilos: 2,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Recursos", 4), newCaracteristica("Fama", 3)],
        Soco: 3,
        Chute: 2,
        Bloqueio: 4,
        Apresamento: 1,
        Esportes: 2,
        Foco: 2,
        NovasTecnicas: [newCaracteristica("Bastao", 3)],
        ManobrasEspeciais: "Shikan Ken, Boshi Ken, Shuto, Power Uppercut, Triple Strike, Punch Defense, Deflecting Punch, Jump, Shrouded Moon",
        Combos: "Bloqueio para Bastão Strong; Punch Defense para Foot Sweep",
        Gloria: 4,
        Honra: 5,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 13
    };
    return personagem;
}

let npc = Midnight();

npc = calcPC(npc);