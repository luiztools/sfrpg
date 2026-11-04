function Necalli() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Fama", 3);
    antecedentes[1] = newCaracteristica("Hibrido Animal", 4);

    var tecnicas = [];
    tecnicas[0] = newCaracteristica("Garra", 6);

    var necalli = {
        Nome: "Necalli",
        Estilo: "Luta-Livre Nativo Americana",
        Jogador: "NPC",
        Assinatura: "Devorar-ar",
        Conceito: "Devorador de Almas",
        Cronica: "Street Fighter 5",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 1,
        Aparencia: 1,
        Percepcao: 6,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 6,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 1,
        Labia: 1,
        LutaCega: 5,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 6,
        Sobrevivencia: 6,
        Arena: 3,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 6,
        Esportes: 5,
        Foco: 3,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Power Uppercut, Dragon Punch, Jump, Foot Sweep, Throw, Power Up, Shockwave, Head Butt, Dive Kick, Flying Head Butt, Storm Hammer, Hyper Fist, Pile Driver, Spinning Pile Driver, Daikyou Burning, Heart Punch, Shockwave",
        Combos: "Forward para Roundhouse para Shockwave (Dizzy); Garra Jab para Garra Strong para Garra Fierce (Dizzy);Shockwave para Shockwave; Daikyou Burning para Hyper Fist",
        Gloria: 3,
        Honra: 0,
        Chi: 3,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 9
    };
    return calcPC(necalli);
}

const npc = Necalli();