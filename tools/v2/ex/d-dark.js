function DoctrineDarkEX() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 1);
    antecedentes[1] = newCaracteristica("Cibernético", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas Pesadas", 3);
    tecnicas[1] = newCaracteristica("Faca", 5);
    tecnicas[2] = newCaracteristica("Chicote", 6);

    const armas = [];
    armas[0] = "Garrote";
    armas[1] = "Faca";

    return {
        Nome: "Doctrine Dark",
        Estilo: "Forças Especiais",
        Escola: "Forças Armadas",
        Jogador: "NPC",
        Assinatura: "Máscara",
        Conceito: "Ex-militar",
        Cronica: "Street Fighter EX",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 0,
        Manha: 4,
        Labia: 5,
        LutaCega: 0,
        Conducao: 5,
        Lideranca: 4,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 0,
        Computador: 2,
        Investigacao: 0,
        Medicina: 4,
        Misterios: 0,
        Estilos: 0,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Power Uppercut, Foot Sweep, Throw, Back Roll Throw, Killing Blade, Dark Spark, Jump",
        Combos: "Fierce para Garrote (Dizzy); Foot Sweep para Back Roll Throw; Killing Blade para Dark Spark (Dizzy)",
        Gloria: 7,
        Honra: 3,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
}

const npc = calcPC(DoctrineDarkEX());
