function MiraKI() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Contatos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Garra", 4);

    const armas = [];
    armas[0] = "Garra";

    const ficha = {
        Nome: "Mira",
        Estilo: "Jeet Kune Dô",
        Escola: "Guarda Noturna",
        Jogador: "NPC",
        Assinatura: "Lambe o sangue das garras",
        Conceito: "Vampira",
        Cronica: "Killer Instinct",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
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
        Manha: 3,
        Labia: 3,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Throw, Air Throw, Flying Body Spear, Fireball, Repeating Fireball, Head Bite, Leech, Ghost Form, Regeneration, Flight",
        Combos: "Flying Body Spear para Head Bite (Dizzy); Fireball para Flying Body Spear; Garra Jab para Leech",
        Gloria: 3,
        Honra: 2,
        Chi: 6,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return ficha;
}

const npc = calcPC(MiraKI());
