function Blade() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Empresario", 4);
    antecedentes[3] = newCaracteristica("Aliados", 4);
    antecedentes[4] = newCaracteristica("Staff", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 2);

    const armas = [];
    armas[0] = "Faca";

    const blade =
    {
        Nome: "Blade",
        Estilo: "Ninjitsu Espanhol",
        Escola: "Escola de Vega",
        Equipe: "Fernando Degaul",
        Time: "Os Pressagios",
        Conceito: "Matador",
        Jogador: "NPC",
        Time: "Nenhum",
        Equipe: "Nenhuma",
        Assinatura: "Reverencia o oponente e sorri",
        Forca: 2,
        Destreza: 5,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 1,
        Manha: 3,
        Labia: 1,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 2,
        Furtividade: 3,
        Arena: 1,
        Investigacao: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 1,
        Esportes: 4,
        Armas: armas,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Slide Kick, Jump, Backflip",
        Combos: "",
        Gloria: 3,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 8,
        Saude: 10,
        Divisao: "Duelistas",
        Posto: 1
    };
    return blade;
}

const npc = calcPC(Blade());