function KanRaKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 4);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Fama", 2);

    const ficha = {
        Nome: "Kan-Ra",
        Estilo: "Baraqah",
        Escola: "Corte da Babilônia",
        Jogador: "NPC",
        Assinatura: "Envolve-se num redemoinho de areia",
        Conceito: "Feiticeiro amaldiçoado",
        Cronica: "Killer Instinct",
        Forca: 3,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 6,
        Aparencia: 0,
        Percepcao: 6,
        Inteligencia: 7,
        Raciocinio: 7,
        Prontidao: 4,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 5,
        Manha: 3,
        Labia: 5,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 4,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 6,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 6,
        Apresamento: 5,
        Esportes: 5,
        Foco: 7,
        ManobrasEspeciais: "Jump, Throw, Fireball, Improved Fireball, Repeating Fireball, Shockwave, Yoga Teleport, Telekinesis, Leech, Regeneration, Cobra Charm, Extendible Limbs, Levitation, Mind Control",
        Combos: "Cobra Charm para Leech; Fireball para Extendible Limbs (Dizzy); Yoga Teleport para Fierce para Fireball",
        Gloria: 3,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return ficha;
}

const npc = calcPC(KanRaKI());
