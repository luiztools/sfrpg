
function Matrix() {
    const personagem = {
        Nome: "Matrix",
        Estilo: "Kickboxe",
        Assinatura: "Posa sensualmente",
        Conceito: "Ciborgue",
        Forca: 4,
        Destreza: 4,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 1,
        Prontidao: 4,
        Intimidacao: 3,
        Perspicacia: 1,
        NovosTalentos: [],
        LutaCega: 3,
        Conducao: 2,
        Seguranca: 1,
        Furtividade: 1,
        NovasPericias: [],
        Arena: 2,
        Computador: 3,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 2,
        Estilos: 2,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Cibernetico", 3), newCaracteristica("Fama", 3)],
        Soco: 4,
        Chute: 4,
        Bloqueio: 2,
        Apresamento: 1,
        Esportes: 2,
        Foco: 3,
        NovasTecnicas: [],
        ManobrasEspeciais: "Jump, Fist Sweep, Air Smash, Power Uppercut, Spinning Back Fist, Double Hit Kick, Double Dread Kick, Slide Kick, Shock Treatment",
        Combos: "Jump para Slide Kick para Power Uppercut (Dizzy)",
        Gloria: 4,
        Honra: 2,
        Chi: 5,
        ForcaVontade: 5,
        Saude: 17,
        Divisao: "Tradicional",
        Posto: 5
    };
    return personagem;
}

let npc = Matrix();

npc = calcPC(npc);