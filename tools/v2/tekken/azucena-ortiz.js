function AzucenaTk8() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 4);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Administrar", 4);

    const pericias = [];
    pericias[0] = newCaracteristica("Publicidade", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Finanças", 3);

    return {
        Nome: "Azucena Ortiz",
        Estilo: "Vale-Tudo (Kickboxe)",
        Escola: "Academia de MMA",
        Jogador: "NPC",
        Assinatura: "Faz uma pausa para um gole de café no meio da luta",
        Conceito: "Rainha do Café",
        Cronica: "Tekken 8",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 2,
        Labia: 5,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 2,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        Soco: 5,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 2,
        ManobrasEspeciais: "Jump, Kippup, Throw, Esquives, Displacement, Ducking Blow, Backflip, Wall Spring, Take Down, Ground Fighting, Knee Basher, Spinning Back Fist, Hyper Fist, Double Hit Kick, Reverse Frontal Kick, Stepping Front Kick, Flying Knee Thrust, Foot Sweep, Kick Defense, Cross Counter",
        Combos: "Esquives para Displacement; Ducking Blow para Flying Knee Thrust; Double Hit Kick para Reverse Frontal Kick (Dizzy); Spinning Back Fist para Stepping Front Kick; Take Down para Knee Basher; Kick Defense para Cross Counter",
        Gloria: 6,
        Honra: 5,
        Chi: 4,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
}

let npc = AzucenaTk8();
npc = calcPC(npc);
