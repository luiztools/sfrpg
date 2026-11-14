function ChangKoehan() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 5);

    const armas = [];
    armas[0] = "Kusari";

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 2);

    const personagem = {
        Nome: "Chang Koehan",
        Estilo: "Tae Kwon Dô",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Grito de Vitória!",
        Conceito: "Ex-presidiário",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Korea Justice",
        Forca: 7,
        Destreza: 2,
        Vigor: 7,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 1,
        Inteligencia: 1,
        Raciocinio: 3,
        Prontidao: 1,
        Interrogacao: 0,
        Intimidacao: 6,
        Perspicacia: 0,
        Manha: 5,
        Labia: 2,
        LutaCega: 1,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 0,
        Sobrevivencia: 3,
        Arena: 0,
        Computador: 0,
        Investigacao: 3,
        Medicina: 0,
        Misterios: 0,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 6,
        Esportes: 2,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        NovasPericias: pericias,
        ManobrasEspeciais: "Jump, Breakfall, Throw, Head Butt, Head Butt Hold, Flying Head Butt, Face Slam, Foot Sweep, Air Smash, Double Hit Kick",
        Combos: "Flying Head Butt para Air Smash (Dizzy); Chicote Jab para Chicote Jab para Chicote Jab (Dizzy); Face Slam para Face Slam para Face Slam",
        Gloria: 6,
        Honra: 3,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = ChangKoehan();

npc = calcPC(npc);
