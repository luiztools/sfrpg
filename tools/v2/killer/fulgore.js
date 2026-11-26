function FulgoreKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Apoio", 5);
    antecedentes[2] = newCaracteristica("Cibernético", 6);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Garra", 5);
    tecnicas[1] = newCaracteristica("Armas de Fogo", 4);

    const armas = [];
    armas[0] = "Garra";
    armas[1] = "Metralhadora Acoplada";
    armas[2] = "Laser";

    const fulgore = {
        Nome: "Fulgore",
        Estilo: "Jeet Kune Dô",
        Escola: "Banco de dados da Ultratech",
        Jogador: "NPC",
        Assinatura: "Levanta os braços",
        Conceito: "Robô",
        Cronica: "Killer Instinct",
        Equipe: "Ultratech",
        Time: "Ultratech",
        Forca: 6,
        Destreza: 5,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 6,
        Perspicacia: 6,
        Manha: 2,
        Labia: 0,
        LutaCega: 6,
        Conducao: 5,
        Lideranca: 2,
        Seguranca: 6,
        Furtividade: 2,
        Sobrevivencia: 5,
        Arena: 4,
        Computador: 6,
        Investigacao: 2,
        Medicina: 5,
        Misterios: 3,
        Estilos: 6,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Power Uppercut, Dragon Punch, Dashing Punch, Fireball, Foot Sweep, Missile Reflection, Energy Reflection, Repeating Fireball, Double Hit Kick, Yoga Teleport, Maka Wara, Slide Kick",
        Combos: "Dashing Punch para Double Hit Kick para Dragon Punch (Dizzy); Fireball para Dashing Punch (Dizzy); Dashing Punch para Slide Kick para Dragon Punch (Dizzy)",
        Gloria: 8,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return fulgore;
}

const npc = calcPC(FulgoreKI());