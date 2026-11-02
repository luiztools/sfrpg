function Capita() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 5);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 1);
    antecedentes[4] = newCaracteristica("Staff", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 4);

    const personagem = {
        Nome: "Tiffany 'Capitã' Dawn",
        Estilo: "Kickboxe",
        Escola: "Metro City Uni",
        Jogador: "NPC",
        Assinatura: "Desliza no gelo",
        Conceito: "Capitã de Hockey",
        Equipe: "Sliders",
        Time: "Sliders",
        Forca: 3,
        Destreza: 4,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 3,
        Labia: 1,
        NovosTalentos: [],
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 0,
        NovasPericias: [],
        Arena: 5,
        Computador: 1,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 1,
        Chute: 4,
        Bloqueio: 1,
        Apresamento: 2,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Throw, Slide Kick, Ice Blast, Double Hit Kick, Double Dread Kick",
        Combos: "Aparar – Bastão Fierce – Bastão Fierce; Slide Kick – Double Dread Kick – Ice Blast (dizzy)",
        Gloria: 4,
        Honra: 2,
        Chi: 6,
        ForcaVontade: 6,
        Saude: 14,
        Divisao: "Tradicional",
        Posto: 4
    };
    return personagem;
}

let npc = Capita();

npc = calcPC(npc);