
function Rix() {
    const personagem = {
        Nome: "Rix",
        Estilo: "Jeet Kune Dô",
        Escola: "Mundo Real",
        Assinatura: "Sopra as unhas e esfrega no peito",
        Conceito: "Garoto Amargurado",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 4,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 3,
        Labia: 3,
        NovosTalentos: [],
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 3,
        NovasPericias: [],
        Arena: 2,
        Misterios: 2,
        Estilos: 3,
        NovosConhecimentos: [],
        Antecedentes: [],
        Soco: 4,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        Foco: 1,
        NovasTecnicas: [],
        ManobrasEspeciais: "Head Butt, Flying Heel Stomp, Hyper Fist, Jump, Power Uppercut, Kippup, Backflip Kick, Air Hurricane Kick, Handstand Kick, Deflecting Punch, Punch Defense, Throw, Air Smash",
        Combos: "Bloqueio para Handstand Kick; Jab para Strong para Jump + Roundhouse (Dizzy)",
        Gloria: 6,
        Honra: 5,
        Chi: 4,
        ForcaVontade: 5,
        Saude: 13,
        Divisao: "Estilo Livre",
        Posto: 4
    };
    return personagem;
}

let npc = Rix();

npc = calcPC(npc);