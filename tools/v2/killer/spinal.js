function SpinalKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Espectro", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Espada", 6);

    const armas = [];
    armas[0] = "Cimitarra";

    const spinal = {
        Nome: "Spinal",
        Estilo: "Kenjutsu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Gargalhada",
        Conceito: "Espectro",
        Cronica: "Killer Instinct",
        Equipe: "Ultratech",
        Time: "Ultratech",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 0,
        Percepcao: 5,
        Inteligencia: 2,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 1,
        Labia: 3,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 4,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Slide Kick, Fireball, Yoga Teleport, Missile Reflection, Energy Reflection, Repeating Fireball",
        Combos: "Slide Kick para Espada Strong para Fireball (Dizzy); Escudo Jab para Espada Strong para Espada Fierce (Dizzy); Fireball para Slide Kick (Dizzy)",
        Gloria: 7,
        Honra: 0,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return spinal;
}

const npc = calcPC(SpinalKI());