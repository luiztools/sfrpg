function GrantGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Arena", 5);
    antecedentes[3] = newCaracteristica("Contatos", 4);
    antecedentes[4] = newCaracteristica("Empresário", 3);
    antecedentes[5] = newCaracteristica("Recursos", 3);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 5);
    talentos[1] = newCaracteristica("Administrar", 3);
    talentos[2] = newCaracteristica("Procurar", 5);

    const pericias = [];
    pericias[0] = newCaracteristica("Demolições", 5);
    pericias[1] = newCaracteristica("Disfarce", 3);
    pericias[2] = newCaracteristica("Reparos", 4);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Ciências", 4);
    conhecimentos[1] = newCaracteristica("Direito", 3);
    conhecimentos[2] = newCaracteristica("Linguística", 1);

    const personagem = {
        Nome: "Grant",
        Estilo: "Karatê Shotokan",
        Escola: "Entidade das sombras",
        Jogador: "NPC",
        Assinatura: "Invoca chamas púrpuras nas mãos fechadas e ergue uma delas para o céu",
        Conceito: "Guarda-costas",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 6,
        Destreza: 5,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 3,
        Labia: 3,
        LutaCega: 5,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 5,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 5,
        Computador: 1,
        Investigacao: 5,
        Medicina: 3,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 3,
        Foco: 6,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Maka Wara, Foot Sweep, Jumping Shoulder Butt, Dragon Punch, Fireball, Dive Kick, Reverse Frontal Kick, Power Uppercut, Throw, Punch Defense, Deflecting Punch, Head Butt, Flying Knee Thrust, Double Hit Kick",
        Combos: "Head Butt para Fireball para Jumping Shoulder Butt",
        Gloria: 10,
        Honra: 5,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = GrantGarou();

npc = calcPC(npc);
