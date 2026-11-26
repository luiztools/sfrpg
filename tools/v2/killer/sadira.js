function SadiraKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Garra", 5);

    const armas = [];
    armas[0] = "Garra";

    const ficha = {
        Nome: "Sadira",
        Estilo: "Thai Kickboxe",
        Escola: "Olhos Vermelhos de Rylai",
        Jogador: "NPC",
        Assinatura: "Pende de um fio de teia e ri",
        Conceito: "Assassina",
        Cronica: "Killer Instinct",
        Equipe: "Ultratech",
        Time: "Ultratech",
        Forca: 4,
        Destreza: 7,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 4,
        Labia: 3,
        LutaCega: 3,
        Conducao: 2,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 6,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Air Throw, Wall Spring, Tumbling Attack, Flying Body Spear, Power Uppercut, Tiger Knee, Light Feet, Spinning Weapon",
        Combos: "Tumbling Attack para Power Uppercut (Dizzy); Wall Spring para Air Throw; Garra Jab para Spinning Weapon para Tiger Knee (Dizzy)",
        Gloria: 4,
        Honra: 1,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return ficha;
}

const npc = calcPC(SadiraKI());
