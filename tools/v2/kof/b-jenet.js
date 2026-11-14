function JenetGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 5);
    antecedentes[3] = newCaracteristica("Elemental (Ar)", 5);
    antecedentes[4] = newCaracteristica("Arena", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 2);
    talentos[1] = newCaracteristica("Administrar", 3);
    talentos[2] = newCaracteristica("Procurar", 2);

    const pericias = [];
    pericias[0] = newCaracteristica("Apostar", 3);
    pericias[1] = newCaracteristica("Demolições", 2);
    pericias[2] = newCaracteristica("Disfarce", 3);
    pericias[3] = newCaracteristica("Reparos", 2);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 2);
    conhecimentos[1] = newCaracteristica("Finanças", 3);
    conhecimentos[2] = newCaracteristica("Direito", 2);
    conhecimentos[3] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "B. Jenet",
        Estilo: "Savate",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Com um grande sorriso, coloca uma das mãos na nuca e mostra as unhas da outra",
        Conceito: "Pirata",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Fatal Fury Team",
        Forca: 3,
        Destreza: 6,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 3,
        Labia: 4,
        LutaCega: 3,
        Conducao: 5,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 3,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 2,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 6,
        Foco: 3,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Throw, Foot Sweep, Haymaker, Flying Thrust Kick, Wall Spring, Cobra Charm, Flying Body Spear, Fireball, Spinning Back Fist, Breakfall, Power Kick, Lightning Leg",
        Combos: "Forward para Jab para Haymaker (Dizzy); Flying Thrust Kick para Flying Body Spear (Dizzy); Jump para Flying Body Spear",
        Gloria: 7,
        Honra: 5,
        Chi: 5,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = JenetGarou();

npc = calcPC(npc);
