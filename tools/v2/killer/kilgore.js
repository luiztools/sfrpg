function KilgoreKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Cibernético", 6);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 4);

    const armas = [];
    armas[0] = "Metralhadora Pequena";

    const ficha = {
        Nome: "Kilgore",
        Estilo: "Jeet Kune Dô",
        Escola: "Banco de dados da Ultratech",
        Jogador: "NPC",
        Assinatura: "Gira as metralhadoras dos braços",
        Conceito: "Androide de combate",
        Cronica: "Killer Instinct",
        Forca: 6,
        Destreza: 5,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 6,
        Perspicacia: 5,
        Manha: 1,
        Labia: 0,
        LutaCega: 5,
        Conducao: 3,
        Lideranca: 1,
        Seguranca: 5,
        Furtividade: 1,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 5,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 2,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Power Uppercut, Dashing Punch, Flying Body Spear, Repeating Fireball, Missile Reflection, Foot Sweep, Slide Kick, Maka Wara",
        Combos: "Dashing Punch para Power Uppercut (Dizzy); Repeating Fireball para Dashing Punch; Slide Kick para Power Uppercut (Dizzy)",
        Gloria: 4,
        Honra: 3,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 8
    };
    return ficha;
}

const npc = calcPC(KilgoreKI());
