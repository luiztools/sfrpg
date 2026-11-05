
function Kiritan() {
    const personagem = {
        Nome: "Kiritan",
        Estilo: "Silat",
        Escola: "Malásia",
        Assinatura: "Cruza os braços, ergue o queixo.",
        Conceito: "Híbrido Tigre",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 1,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Intimidacao: 2,
        Perspicacia: 3,
        NovosTalentos: [],
        LutaCega: 2,
        Conducao: 2,
        Furtividade: 5,
        Sobrevivencia: 2,
        NovasPericias: [],
        Medicina: 1,
        Misterios: 2,
        Estilos: 2,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Híbrido Animal", 2), newCaracteristica("Empresario", 2), newCaracteristica("Recursos", 3), newCaracteristica("Fama", 2), newCaracteristica("Mascote", 2)],
        Soco: 3,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 5,
        Foco: 1,
        NovasTecnicas: [],
        ManobrasEspeciais: "Tearing Bite, Ripping Bite, Pounce, Triple Strike, Lightning Leg, Grappling Defense, Backflip Kick, Claw, Bite",
        Combos: "Pounce para Ripping Bite; Claw para Backflip Kick",
        Gloria: 2,
        Honra: 2,
        Chi: 2,
        ForcaVontade: 6,
        Saude: 14,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return personagem;
}

let npc = Kiritan();

npc = calcPC(npc);