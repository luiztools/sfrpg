function Maxima() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Cibernético", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Procurar", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Disfarce", 2);

    const personagem = {
        Nome: "Maxima",
        Estilo: "Forças Especiais",
        Escola: "Exército do Canadá",
        Jogador: "NPC",
        Assinatura: "Examina o inimigo",
        Conceito: "Grandalhão",
        Cronica: "The King of Fighters",
        Equipe: "NESTS",
        Time: "K Dash Hero",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 2,
        Manha: 4,
        Labia: 3,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 3,
        Computador: 5,
        Investigacao: 4,
        Medicina: 1,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Throw, Argentine Back Breaker, Air Throw, Tameshiwari, Fist Sweep, Haymaker, Face Slam, Power Uppercut, Head Butt, Foot Sweep, Dashing Clothesline, Air Smash, Flying Tackle, Sonic Boom, Telepathy, Mind Reading",
        Combos: "Flying Tackle para Face Slam; Throw para Sonic Boom; Haymaker para Sonic Boom (Dizzy); Argentine Back Breaker para Head Butt (Dizzy)",
        Gloria: 7,
        Honra: 5,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = Maxima();

npc = calcPC(npc);
