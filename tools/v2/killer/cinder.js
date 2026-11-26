function CinderKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Elemental (Fogo)", 6);

    const cinder = {
        Nome: "Cinder",
        Estilo: "Kickboxe",
        Escola: "As ruas",
        Jogador: "NPC",
        Assinatura: "Sempre em chamas",
        Conceito: "Criminoso",
        Cronica: "Killer Instinct",
        Equipe: "Ultratech",
        Time: "Ultratech",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 5,
        Aparencia: 1,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 5,
        Labia: 5,
        LutaCega: 1,
        Conducao: 4,
        Lideranca: 4,
        Seguranca: 5,
        Furtividade: 4,
        Sobrevivencia: 1,
        Arena: 1,
        Computador: 2,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Power Uppercut, Head Butt, Flying Head Butt, Flaming Fist, Fire Strike, Elemental Skin, Heat Wave, Double Hit Kick, Backflip Kick, Forward Backflip Kick, Foot Sweep, Missile Reflection, Energy Reflection",
        Combos: "Flying Head Butt para Double Hit Kick para Forward Backflip Kick (Dizzy); Fire Strike para Flying Head Butt para Double Hit Kick (Dizzy); Flying Head Butt para Double Hit Kick para Flying Head Butt (Dizzy)",
        Gloria: 6,
        Honra: 3,
        Chi: 8,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return cinder;
}

const npc = calcPC(CinderKI());