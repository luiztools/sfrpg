function DongHwanGarou() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Empresário", 2);
    antecedentes[4] = newCaracteristica("Recursos", 3);
    antecedentes[5] = newCaracteristica("Arena", 3);
    antecedentes[6] = newCaracteristica("Sensei", 4);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 4);
    talentos[1] = newCaracteristica("Administrar", 3);
    talentos[2] = newCaracteristica("Procurar", 3);

    const pericias = [];
    pericias[0] = newCaracteristica("Apostar", 3);
    pericias[1] = newCaracteristica("Publicidade", 3);
    pericias[2] = newCaracteristica("Demolições", 3);

    const conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Finanças", 2);
    conhecimentos[1] = newCaracteristica("Direito", 2);
    conhecimentos[2] = newCaracteristica("Linguística", 2);

    const personagem = {
        Nome: "Kim Dong Hwan",
        Estilo: "Tae Kwon Dô",
        Escola: "Dojô Kaphwan",
        Jogador: "NPC",
        Assinatura: "Equilibra-se em um pé enquanto limpa o outro",
        Conceito: "Autoconfiante",
        Cronica: "Garou: Mark of the Wolves",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 2,
        Labia: 4,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 4,
        NovosTalentos: talentos,
        NovasPericias: pericias,
        NovosConhecimentos: conhecimentos,
        ManobrasEspeciais: "Jump, Throw, Foot Sweep, Shock Treatment, Flash Kick, Wheel Kick, Lightning Leg, Flying Thrust Kick, Ax Kick, Kick Defense, Double Hit Kick, Power Kick, Reverse Frontal Kick",
        Combos: "Reverse Frontal Kick para Double Hit Kick; Shock Treatment para Wheel Kick",
        Gloria: 6,
        Honra: 5,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 18,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = DongHwanGarou();

npc = calcPC(npc);
