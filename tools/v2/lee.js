function LeeSF1() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Empresario", 2);
    antecedentes[2] = newCaracteristica("Staff", 1);
    antecedentes[3] = newCaracteristica("Sensei", 4);

    var lee =
    {
        Nome: "Lee",
        Conceito: "Lutador Profissional",
        Estilo: "Kung Fu",
        Assinatura: "Postura Defensiva",
        Escola: "Dojô de Gen",
        Jogador: "NPC",
        Cronica: "Street Fighter 1",
        Time: "Nenhum",
        Equipe: "Nenhuma",
        Forca: 5,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 3,
        Perspicacia: 4,
        LutaCega: 4,
        Furtividade: 2,
        Arena: 2,
        Medicina: 3,
        Misterios: 3,
        Estilos: 3,
        Soco: 4,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 4,
        Foco: 3,
        ManobrasEspeciais: "Jump, Throw, Double-Hit Kick, Flying Knee Thrust, Foot Sweep, Spinning Foot Sweep, Slide Kick",
        Antecedentes: antecedentes,
        Combos: "Jab para Slide Kick, Flying Knee Thrust para Double-Hit Kick (Dizzy)",
        Chi: 6,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 7,
        Gloria: 6,
        Honra: 5
    };
    return calcPC(lee);
}

const npc = LeeSF1();