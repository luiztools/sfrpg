function Dean() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 2);
    antecedentes[1] = newCaracteristica("Aliados", 2);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Elemental (Elétrico)", 3);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 2);

    var dean = {
        Nome: "Dean",
        Estilo: "Jeet Kune Dô",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Eletricidade",
        Conceito: "Vingador amargurado",
        Cronica: "Final Fight 3",
        Time: "Final Fight",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 3,
        Labia: 1,
        LutaCega: 1,
        Conducao: 4,
        Lideranca: 1,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 1,
        Investigacao: 1,
        Misterios: 2,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 5,
        Esportes: 3,
        Foco: 4,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Elbow Smash, Shock Treatment, Psychokinetic Channeling, Power Uppercut, Slide Kick, Storm Hammer, Stomach Pump, Throw, Suplex, Jump",
        Combos: "Jab para Strong para Fierce (Dizzy); Shock Treatment para Storm Hammer (Dizzy)",
        Gloria: 8,
        Honra: 5,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Estilo Livre",
        Posto: 8
    };
    return calcPC(dean);
}
const npc = Dean();