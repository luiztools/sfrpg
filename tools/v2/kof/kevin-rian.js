function KevinGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 4);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Arena", 3);
    antecedentes[5] = newCaracteristica("Elemental (Fogo)", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 3);
    tecnicas[1] = newCaracteristica("Armas de Fogo", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 3);
    talentos[1] = newCaracteristica("Administrar", 3);
    talentos[2] = newCaracteristica("Procurar", 4);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 3);
    pericias[1] = newCaracteristica("Disfarce", 3);
    pericias[2] = newCaracteristica("Reparos", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 4);
    conhecimentos[1] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "Kevin Rian",
        Estilo: "Forças Especiais",
        Escola: "SWAT",
        Jogador: "NPC",
        Assinatura: "Bate continência para Marky",
        Conceito: "Oficial da SWAT",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 4,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 3,
        Labia: 3,
        LutaCega: 3,
        Conducao: 4,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 3,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 4,
        Foco: 3,
        NovasTecnicas: tecnicas,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Throw, Foot Sweep, Double Hit Knee, Spinning Back Fist, Spinning Knuckle, Elemental Explosion, Flying Thrust Kick, Drunken Monkey Roll, Wounded Knee, Buffalo Punch, Wheel Kick, Handstand Kick, Power Uppercut, Elemental Rage, Tameshiwari, Triple Strike",
        Combos: "Short para Throw para Roundhouse (Dizzy); Elemental Rage para Power Uppercut (Dizzy); Wounded Knee para Spinning Back Fist",
        Gloria: 6,
        Honra: 4,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = KevinGarou();

npc = calcPC(npc);
