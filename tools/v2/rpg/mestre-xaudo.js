function MestreXaudo() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 4);
    antecedentes[2] = newCaracteristica("Contatos", 3);

    const personagem = {
        Nome: "Mestre Xaudo",
        Estilo: "Majestic Crow Kung Fu",
        Escola: "",
        Jogador: "NPC",
        Assinatura: "Acena com a cabeça",
        Conceito: "Mestre Sábio",
        Cronica: "O Guerreiro Perfeito",
        Equipe: "",
        Time: "",
        Forca: 2,
        Destreza: 2,
        Vigor: 1,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 5,
        Manha: 2,
        Labia: 0,
        NovosTalentos: [],
        LutaCega: 5,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 4,
        NovasPericias: [],
        Arena: 5,
        Computador: 0,
        Investigacao: 2,
        Medicina: 4,
        Misterios: 5,
        Estilos: 5,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: [],
        ManobrasEspeciais: "Monkey Grab Punch, Missile Reflection, Dim Mak, Kick Defense, Hundred Hand Slap, Iron Claw, Lightning Leg, Throw, Rising Storm Crow, Foot Sweep, Chi Kun Healing, Spinning Foot Sweep, Zen No Mind, Deflecting Punch, Punch Defense",
        Combos: "",
        Gloria: 6,
        Honra: 10,
        Chi: 8,
        ForcaVontade: 9,
        Saude: 5,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc;
npc = MestreXaudo();

npc = calcPC(npc);
