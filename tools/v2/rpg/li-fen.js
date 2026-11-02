function LiFen() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 5);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Aliados", 5);

    const personagem = {
        Nome: "Li Fen",
        Estilo: "Wu Shu",
        Escola: "Professora Particular",
        Jogador: "NPC",
        Assinatura: "Juventude",
        Conceito: "Hacker",
        Cronica: "Street Fighter 6",
        Equipe: "Chun Li",
        Time: "Chun Li",
        Forca: 2,
        Destreza: 3,
        Vigor: 2,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 5,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 0,
        Perspicacia: 3,
        Manha: 2,
        Labia: 2,
        NovosTalentos: [],
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 2,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 0,
        Computador: 5,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 2,
        Bloqueio: 1,
        Apresamento: 1,
        Esportes: 2,
        Foco: 0,
        NovasTecnicas: [],
        ManobrasEspeciais: 'Fireball, Whirlwind Kick, Gekiro, Lightning Leg, Knife Hand Strike, Wall Spring, Foot Sweep',
        Combos: '',
        Gloria: 0,
        Honra: 2,
        Chi: 3,
        ForcaVontade: 4,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 1
    };
    return personagem;
}

let npc = LiFen();

npc = calcPC(npc);