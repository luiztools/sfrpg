function MajorCarnage() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 4);

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 3);
    pericias[1] = newCaracteristica("Demolição", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Idiomas", 1);

    const Major = {
        Nome: "Major Carnage",
        Estilo: "Forças Especiais",
        Escola: "Spetsnaz Russo",
        Jogador: "NPC",
        Assinatura: "Dança Cossaco",
        Conceito: "Comando de Op. Especiais",
        Equipe: "Excalibur Produções",
        Time: "Força Excessiva",
        Forca: 5,
        Destreza: 4,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 2,
        Labia: 3,
        NovosTalentos: [],
        LutaCega: 3,
        Conducao: 5,
        Lideranca: 4,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 5,
        NovasPericias: pericias,
        Arena: 2,
        Computador: 1,
        Medicina: 2,
        Estilos: 2,
        NovosConhecimentos: conhecimentos,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 2,
        Apresamento: 3,
        Esportes: 3,
        Foco: 2,
        ManobrasEspeciais: "Hyper Fist, Spinning Back Fist, Spinning Clothesline, Turbo Spinning Clothesline, Backflip Kick, Foot Sweep, Flash Kick, Spinning Foot Sweep, Neck Choke",
        Combos: "Spinning Clothesline para Flash Kick para Neck Choke (Dizzy); Bloqueio para Spinning Back Fist para Backflip Kick (Dizzy);",
        Gloria: 3,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 7,
        Saude: 15,
        Divisao: "Tradicional",
        Posto: 6
    };
    return Major;
}

let npc = MajorCarnage();

npc = calcPC(npc);