function JosieTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 1);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Recursos", 1);

    const pericias = [];
    pericias[0] = newCaracteristica("Publicidade", 2);

    return {
        Nome: "Josie Rizal",
        Estilo: "Kickboxe",
        Escola: "Treinada pelos pais",
        Jogador: "NPC",
        Assinatura: "Comemora a vitória aos pulos e cai no choro: \"Não acredito que eu ganhei!\"",
        Conceito: "Kickboxer e modelo",
        Cronica: "Tekken 7",
        Forca: 3,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 2,
        LutaCega: 1,
        Conducao: 1,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        NovasPericias: pericias,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 2,
        Esportes: 5,
        Foco: 1,
        ManobrasEspeciais: "Jump, Kippup, Throw, Triple Strike, Elbow Smash, Spinning Back Fist, Deflecting Punch, Cross Counter, Double Hit Kick, Stepping Front Kick, Wheel Kick, Foot Sweep, Slide Kick, Wounded Knee, Tiger Knee, Double Hit Knee, Flying Knee Thrust, Clinch, Knee Basher, Kick Defense, Punch Defense, Power Up",
        Combos: "Triple Strike para Elbow Smash, Double Hit Kick para Wheel Kick (Dizzy), Wounded Knee para Stepping Front Kick, Kick Defense para Double Hit Knee, Clinch para Knee Basher",
        Gloria: 3,
        Honra: 5,
        Chi: 3,
        ForcaVontade: 6,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
}

let npc = JosieTk4();
npc = calcPC(npc);
