function Lucia() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Apoio", 4);
    antecedentes[3] = newCaracteristica("Fama", 1);
    antecedentes[4] = newCaracteristica("Elemental (Fogo)", 2);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    var conhecimentos = [];
    conhecimentos[0] = newCaracteristica("Direito", 1);

    var lucia =
    {
        Nome: "Lucia Morgan",
        Estilo: "Forças Especiais",
        Escola: "Unidade Especial de Crimes",
        Conceito: "Agente especial",
        Assinatura: "Roupas curtas",
        Time: "Final Fight",
        Jogador: "NPC",
        Cronica: "Final Fight 3",
        Forca: 3,
        Destreza: 6,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 3,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 4,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 1,
        Computador: 3,
        Investigacao: 5,
        Medicina: 3,
        Misterios: 1,
        Estilos: 2,
        NovosConhecimentos: conhecimentos,
        NovasPericias: [],
        NovosTalentos: [],
        Antecedentes: antecedentes,
        NovasTecnicas: tecnicas,
        Soco: 3,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Flying Knee Thrust, Double Hit Kick, Jump, Lighting Leg, Rising Lightning Leg, Throw, Knee Basher, Suplex, Roundabout Kick, Flaming Heel, Elbow Smash",
        Combos: "Movimento para Elbow Smash; Rising Lightning Leg para Roundhouse; Jab para Strong para Throw (Dizzy)",
        Posto: 3,
        Gloria: 4,
        Honra: 4,
        Divisao: "Estilo Livre",
        Chi: 7,
        ForcaVontade: 8,
        Saude: 16
    };
    return calcPC(lucia);
}

const npc = Lucia();