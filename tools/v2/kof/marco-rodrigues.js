function MarcoGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Contatos", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Mascote", 5);
    antecedentes[5] = newCaracteristica("Sensei", 5);
    antecedentes[6] = newCaracteristica("Arena", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);
    talentos[1] = newCaracteristica("Administrar", 4);
    talentos[2] = newCaracteristica("Procurar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Publicidade", 3);
    pericias[1] = newCaracteristica("Demolições", 4);
    pericias[2] = newCaracteristica("Reparos", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Finanças", 2);
    conhecimentos[1] = newCaracteristica("Direito", 3);
    conhecimentos[2] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "Marco Rodrigues",
        Estilo: "Karatê Rindoukan",
        Escola: "Dojô Sakazaki",
        Jogador: "NPC",
        Assinatura: "Apresenta uma placa cerimonial de madeira com o nome do estilo Kyokugen",
        Conceito: "Artista Marcial",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 2,
        Labia: 3,
        LutaCega: 5,
        Conducao: 2,
        Lideranca: 5,
        Seguranca: 5,
        Furtividade: 3,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Hyper Fist, Dragon Punch, Kippup, Hurricane Kick, Foot Sweep, Back Roll Throw, Fireball, Improved Fireball, Triple Strike",
        Combos: "Strong para Roundhouse para Dragon Punch; Dragon Punch para Dragon Punch (Dizzy); Jumping Forward para Hyper Fist (Dizzy); Movimento para Hyper Fist para Dragon Punch (Dizzy)",
        Gloria: 7,
        Honra: 8,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 7
    };
    return personagem;
}

let npc = MarcoGarou();

npc = calcPC(npc);
