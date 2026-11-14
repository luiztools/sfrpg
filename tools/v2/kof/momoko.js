function Momoko() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Recursos", 1);

    const talentos = [];

    const personagem = {
        Nome: "Momoko",
        Estilo: "Capoeira",
        Escola: "Psycho Soldiers",
        Jogador: "NPC",
        Assinatura: "Sorriso encantador",
        Conceito: "Fã da Athena",
        Cronica: "The King of Fighters",
        Time: "Psycho Soldiers",
        Forca: 2,
        Destreza: 5,
        Vigor: 3,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 0,
        Labia: 0,
        LutaCega: 2,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 1,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 5,
        Foco: 3,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Kippup, Throw, Handstand Kick, Foot Sweep, Psychokinetic Channeling, Forward Backflip Kick, Backflip Kick, Sonic Boom, Musical Accompaniment, Backflip, Double Hit Knee, Tumbling Attack, Air Smash, Double Hit Kick, Head Butt",
        Combos: "Forward Backflip Kick para Air Smash para Tumbling Attack (Dizzy); Handstand Kick para Tumbling Attack para Head Butt (Dizzy); Tumbling Attack para Foot Sweep (Dizzy); Bloqueio para Throw",
        Gloria: 3,
        Honra: 5,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 16,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Momoko();

npc = calcPC(npc);
