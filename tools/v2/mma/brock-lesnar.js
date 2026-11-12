
function BrockLesnar() {
    const personagem = {
        Nome: "Brock Lesnar",
        Estilo: "Vale-Tudo (Wrestling)",
        Escola: "Minessota High School",
        Assinatura: "Palavreado de baixo calão",
        Conceito: "Lutador Violento",
        Equipe: "Dana White",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Intimidacao: 6,
        Manha: 4,
        NovosTalentos: [],
        Conducao: 2,
        Lideranca: 1,
        Sobrevivencia: 2,
        NovasPericias: [],
        Arena: 2,
        Estilos: 3,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Empresario", 5), newCaracteristica("Aliados", 5), newCaracteristica("Fama", 3)],
        Soco: 5,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 6,
        Esportes: 3,
        NovasTecnicas: [],
        ManobrasEspeciais: "Ear Pop, Double Hit Punch, Air Smash, Throw, Suplex, Buffalo Punch, Bear Hug, Brain Cracker, Stomach Pump, Pin, Improved Pin, Foot Sweep, Head Butt, Hyper Fist, Double Hit Kick, Grappling Defense",
        Combos: "Foot Sweep para Pin (Dizzy); Throw para Air Smash (Dizzy); Buffalo Punch para Hyper Fist (Dizzy)), newCaracteristica(",
        Gloria: 9,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 9
    };
    return personagem;
}

let npc = BrockLesnar();

npc = calcPC(npc);