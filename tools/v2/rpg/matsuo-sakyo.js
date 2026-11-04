
function MatsuoSakyo() {
    const personagem = {
        Nome: "Matsuo Sakyo",
        Estilo: "Ninjitsu",
        Escola: "Clã Sakyo",
        Assinatura: "Fuma um cigarro",
        Conceito: "Ninja dos Negócios",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 6,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 4,
        Labia: 5,
        NovosTalentos: [newCaracteristica("Administrar", 5), newCaracteristica("Instrucao", 4)],
        LutaCega: 5,
        Conducao: 3,
        Furtividade: 5,
        Sobrevivencia: 3,
        NovasPericias: [newCaracteristica("Apostar", 5), newCaracteristica("Disfarce", 4)],
        Arena: 3,
        Medicina: 2,
        Misterios: 5,
        Estilos: 3,
        NovosConhecimentos: [newCaracteristica("Idiomas", 5)],
        Antecedentes: [newCaracteristica("Apoio", 4), newCaracteristica("Recursos", 5), newCaracteristica("Fama", 2), newCaracteristica("Herança de Clã", 5), newCaracteristica("Aliados", 4), newCaracteristica("Staff", 5)],
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 5,
        Foco: 3,
        NovasTecnicas: [newCaracteristica("Espada", 5)],
        ManobrasEspeciais: "Jump, Kippup, Rekka Ken, Ear Pop, Backflip Kick, Double Hit Kick, Deflecting Punch, Drunken Monkey Roll, Wall Spring, Throw, Dislocate Limb, Air Throw, Zen No Mind, Sakki",
        Combos: "Wall Spring + Espada Jab para Double Hit Kick; Wall Spring + Estada Strong para Ear Pop",
        Gloria: 7,
        Chi: 5,
        ForcaVontade: 9,
        Saude: 20
    };
    return personagem;
}

let npc = MatsuoSakyo();

npc = calcPC(npc);