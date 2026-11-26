function AriaKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Recursos", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Cibernético", 6);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Garra", 3);

    const armas = [];
    armas[0] = "Garra";

    const ficha = {
        Nome: "ARIA",
        Estilo: "Jeet Kune Dô",
        Escola: "Banco de dados da Ultratech",
        Jogador: "NPC",
        Assinatura: "Troca de corpo num clarão azul",
        Conceito: "Inteligência artificial",
        Cronica: "Killer Instinct",
        Equipe: "Ultratech",
        Time: "Ultratech",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 6,
        Aparencia: 3,
        Percepcao: 6,
        Inteligencia: 8,
        Raciocinio: 6,
        Prontidao: 6,
        Interrogacao: 4,
        Intimidacao: 4,
        Perspicacia: 6,
        Manha: 2,
        Labia: 4,
        LutaCega: 5,
        Conducao: 4,
        Lideranca: 5,
        Seguranca: 6,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 4,
        Computador: 6,
        Investigacao: 6,
        Medicina: 4,
        Misterios: 3,
        Estilos: 6,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Fireball, Repeating Fireball, Sonic Boom, Dashing Punch, Flying Body Spear, Power Uppercut, Shockwave, Missile Reflection, Spinning Weapon",
        Combos: "Dashing Punch para Power Uppercut (Dizzy); Sonic Boom para Flying Body Spear; Garra Jab para Spinning Weapon para Repeating Fireball (Dizzy)",
        Gloria: 7,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return ficha;
}

const npc = calcPC(AriaKI());
