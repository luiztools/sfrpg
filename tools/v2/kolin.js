function Kolin() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Elemental", 5);

    var kolin =
    {
        Nome: "Kolin",
        Estilo: "Forças Especiais",
        Escola: "KGB",
        Equipe: "Illuminati",
        Time: "Illuminati",
        Conceito: "Ex-militar",
        Assinatura: "Olhar frio e penetrante",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Aparencia: 5,
        Manipulacao: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Intimidacao: 2,
        Manha: 1,
        Labia: 5,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 1,
        Computador: 3,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 3,
        Soco: 4,
        Chute: 4,
        Bloqueio: 6,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        Gloria: 1,
        Honra: 6,
        Chi: 10,
        ForcaVontade: 10,
        Divisao: "Estilo Livre",
        Antecedentes: antecedentes,
        ManobrasEspeciais: "Ice Blast, Punch Defense, Defleting Punch, Hyper Fist, Throw, Spinning Back Fist, Jump, Air Throw, Power Uppercut, Spinning Foot Sweep, Esquives, Chill Touch, Flying Heel Stomp, Stone, Wall, Wheel Kick",
        Combos: "Esquives para Fierce com Chill Touch; Kick defense para Throw para Roundhouse Kick (dizzy); Jab para Foward para Hyper Fist (dizzy)",
        Saude: 20,
        Posto: 8
    };
    return calcPC(kolin);
}
const npc = Kolin();