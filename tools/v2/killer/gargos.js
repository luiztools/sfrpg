function GargosKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Recursos", 5);
    antecedentes[2] = newCaracteristica("Fama", 5);
    antecedentes[3] = newCaracteristica("Híbrido Animal (Demônio)", 5);

    const ficha = {
        Nome: "Gargos",
        Estilo: "Jeet Kune Dô",
        Escola: "Nenhuma (lorde demônio)",
        Jogador: "NPC",
        Assinatura: "Abre as asas e ruge, cuspindo fogo",
        Conceito: "Lorde demônio",
        Cronica: "Killer Instinct",
        Forca: 8,
        Destreza: 5,
        Vigor: 8,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 0,
        Percepcao: 6,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 7,
        Perspicacia: 5,
        Manha: 2,
        Labia: 3,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 6,
        Seguranca: 4,
        Furtividade: 4,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 0,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 6,
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 7,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 5,
        Esportes: 5,
        Foco: 8,
        ManobrasEspeciais: "Jump, Throw, Flight, Claw, Horn, Tail Slash, Tearing Bite, Pounce, Dragons Tail, Tail Sweep, Portal Attack, Fireball, Improved Fireball, Flying Fireball, Yoga Flame, Shockwave, Toughskin, Regeneration, Telepathy, Mind Control, Energy Reflection",
        Combos: "Fireball para Pounce (Dizzy); Claw para Tearing Bite para Yoga Flame (Dizzy); Dragons Tail para Flying Fireball",
        Gloria: 8,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 9
    };
    return ficha;
}

const npc = calcPC(GargosKI());
