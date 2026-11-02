function Jessica() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Contatos", 1);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Reparos", 3);

    const jessica = {
        Nome: "Jessica",
        Estilo: "Boxe",
        Escola: "Academia de Boxe JDN",
        Jogador: "NPC",
        Assinatura: "Gritos de Alegria!",
        Conceito: "Mecânica",
        Equipe: "Gordon Produções",
        Time: "Meteora",
        Forca: 4,
        Destreza: 3,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 2,
        Prontidao: 1,
        Intimidacao: 1,
        Perspicacia: 1,
        Manha: 1,
        Labia: 1,
        NovosTalentos: [],
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 1,
        NovasPericias: pericias,
        Computador: 1,
        Investigacao: 2,
        Estilos: 1,
        NovosConhecimentos: [],
        Antecedentes: antecedentes,
        Soco: 4,
        Bloqueio: 3,
        Esportes: 1,
        ManobrasEspeciais: "Fist Sweep, Dashing Punch, Dashing Uppercut, Jump, Power Uppercut",
        Gloria: 2,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 10,
        Saude: 12,
        Divisao: "Tradicional",
        Posto: 1
    };
    return jessica;
}

let npc = Jessica();

npc = calcPC(npc);