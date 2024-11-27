function Dulcinea() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Empresario", 5);
    antecedentes[1] = newCaracteristica("Staff", 5);
    antecedentes[2] = newCaracteristica("Aliados", 5);
    antecedentes[3] = newCaracteristica("Apoio", 4);
    antecedentes[4] = newCaracteristica("Sensei", 4);
    antecedentes[5] = newCaracteristica("Recursos", 2);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 5);

    const armas = [];
    armas[0] = "Espada";

    var Dulcinea =
    {
        Nome: "Dulcinea",
        Estilo: "Ninjitsu Espanhol",
        Escola: "Dojô de Vega",
        Equipe: "Shadaloo",
        Conceito: "Toureira",
        Jogador: "NPC",
        Time: "Nenhum",
        Equipe: "Nenhuma",
        Assinatura: "Olé!",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 5,
        LutaCega: 3,
        Seguranca: 2,
        Furtividade: 5,
        Arena: 2,
        Investigacao: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 5,
        Gloria: 5,
        Honra: 3,
        Divisao: "Duelistas",
        Posto: 4,
        Chi: 3,
        ForcaVontade: 8,
        Saude: 10,
        ManobrasEspeciais: "Forward Slide Kick, Back Roll Throw, Backflip, Wall Spring, Tumbling Attack, Jump",
        Combos: "Jab para Forward Slide Kick; Short para Tumbling Attack",
        NovasTecnicas: tecnicas,
        Armas: armas
    };
    return Dulcinea;
}

const npc = calcPC(Dulcinea());