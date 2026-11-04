
function DanniClaw() {
    const personagem = {
        Nome: "Danni Claw",
        Estilo: "Ninjitsu",
        Escola: "Clã Sakyo",
        Assinatura: "Some em meio a fumaça",
        Conceito: "Assassina Particular",
        Equipe: "Matsuo Sakyo",
        Forca: 3,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 6,
        Prontidao: 4,
        Perspicacia: 5,
        Manha: 4,
        Labia: 5,
        NovosTalentos: [],
        LutaCega: 5,
        Conducao: 2,
        Furtividade: 5,
        Sobrevivencia: 3,
        NovasPericias: [newCaracteristica("Disfarce", 5)],
        Arena: 3,
        Misterios: 2,
        Estilos: 3,
        NovosConhecimentos: [],
        Antecedentes: [newCaracteristica("Apoio", 3), newCaracteristica("Herança de Clã", 4), newCaracteristica("Aliados", 4)],
        Soco: 5,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 5,
        Foco: 1,
        NovasTecnicas: [newCaracteristica("Faca", 5)],
        ManobrasEspeciais: "Jump, Kippup, Rekka Ken, Hundred Hand Slap, Backflip Kick, Double Hit Kick, Esquives, Backflip, Wall Spring, Throw, Eye Rake, Wounded Knee",
        Combos: "Wall Spring + Jab para Hundred Hand Slap; Wall Spring + Strong para Eye Rake",
        Gloria: 5,
        Chi: 2,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return personagem;
}

let npc = DanniClaw();

npc = calcPC(npc);