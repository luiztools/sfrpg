
function ShanLung() {
    const personagem = {
        Nome: "Shan Lung",
        Estilo: "Kung Fu",
        Escola: "Templo Shaolin",
        Assinatura: "Arqueia-se para o oponente",
        Conceito: "Dragão",
        Forca: 7,
        Destreza: 6,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Perspicacia: 5,
        NovosTalentos: [],
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        NovasPericias: [],
        Arena: 3,
        Investigacao: 2,
        Medicina: 3,
        Misterios: 4,
        Estilos: 5,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Contatos", 2), newCaracteristica("Recursos", 1)],
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 3,
        Foco: 5,
        NovasTecnicas: [],
        ManobrasEspeciais: "Dragon Punch, San He, Rekka Ken, Punch Defense, Power Uppercut, Jump, Monkey Grab Punch, Regeneration, Air Hurricane Kick, Fireball, Backflip Kick, Flying Heel Stomp, Dragon Kick, Kippup, Double Dread Kick, Stunning Shout, Double Hit Kick",
        Combos: "Roundhouse para Double Dread Kick (Dizzy); Short para Fierce para Rekka Ken",
        Gloria: 7,
        Honra: 8,
        Chi: 9,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 8
    };
    return personagem;
}

let npc = ShanLung();

npc = calcPC(npc);