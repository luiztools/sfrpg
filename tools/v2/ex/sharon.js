function SharonEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 5);

    const armas = [];
    armas[0] = "Pistola Pesada";
    armas[1] = "Fuzil de Assalto";

    return {
        Nome: "Sharon",
        Estilo: "Forças Especiais",
        Escola: "Governo",
        Jogador: "NPC",
        Assinatura: "Olhar frio",
        Conceito: "Assassina",
        Cronica: "Street Fighter EX",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 0,
        Manha: 5,
        Labia: 5,
        LutaCega: 0,
        Conducao: 5,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 2,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 1,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Double Hit Kick, Brain Cracker, Suplex, Foot Sweep, Slide Kick, Ax Kick, Spinning Back Fist, Back Roll Throw",
        Combos: "Movimento para Back Roll Throw; Ax Kick para Brain Cracker; Double Hit Kick para Fierce (Dizzy)",
        Gloria: 5,
        Honra: 3,
        Chi: 2,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 6
    };
}

const npc = calcPC(SharonEX());
