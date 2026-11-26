function EagleKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Mascote", 3);
    antecedentes[2] = newCaracteristica("Cibernético", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arco", 5);

    const armas = [];
    armas[0] = "Arco Curto";

    const ficha = {
        Nome: "Eagle",
        Estilo: "Luta-Livre Nativo Americana",
        Escola: "Reserva Nez Perce (Idaho)",
        Jogador: "NPC",
        Assinatura: "Ergue o arco e sua águia pousa no seu braço",
        Conceito: "Guerreiro nativo",
        Cronica: "Killer Instinct",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 6,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 1,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 2,
        Labia: 1,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 1,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 3,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Foot Sweep, Power Uppercut, Accuracy, Hyper Tackle, Suplex, Backflip Kick, Missile Reflection",
        Combos: "Arco Jab para Hyper Tackle (Dizzy); Foot Sweep para Power Uppercut; Jab para Strong para Suplex",
        Gloria: 3,
        Honra: 7,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 7
    };
    return ficha;
}

const npc = calcPC(EagleKI());
