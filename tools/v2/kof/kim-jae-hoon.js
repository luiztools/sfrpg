function JaeHoonGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Elemental (Fogo)", 3);
    antecedentes[5] = newCaracteristica("Arena", 3);
    antecedentes[6] = newCaracteristica("Sensei", 4);
    antecedentes[7] = newCaracteristica("Fama", 1);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);
    talentos[1] = newCaracteristica("Administrar", 4);
    talentos[2] = newCaracteristica("Procurar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 2);
    conhecimentos[1] = newCaracteristica("Finanças", 3);
    conhecimentos[2] = newCaracteristica("Direito", 5);
    conhecimentos[3] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "Kim Jae Hoon",
        Estilo: "Tae Kwon Dô",
        Escola: "Dojô Kaphwan",
        Jogador: "NPC",
        Assinatura: "Ao fim do combate, corre até o adversário para ajudá-lo",
        Conceito: "Garoto Sério",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 2,
        Labia: 2,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 3,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Throw, Foot Sweep, Flaming Heel, Ax Kick, Flash Kick, Kick Defense, Double Hit Kick, Power Kick, Reverse Frontal Kick, Lightning Leg, Wheel Kick, Flying Thrust Kick, Dive Kick",
        Combos: "Foot Sweep para Ax Kick; Lightning Leg para Reverse Frontal Kick para Flash Kick; Flying Thrust Kick para Flash Kick para Dive Kick",
        Gloria: 5,
        Honra: 9,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = JaeHoonGarou();

npc = calcPC(npc);
