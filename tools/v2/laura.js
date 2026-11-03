function Laura() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Aliados", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Sensei", 3);
    antecedentes[5] = newCaracteristica("Elemental (Eletricidade)", 1);

    var laura = {
        Nome: "Laura Matsuda",
        Estilo: "Jiu Jitsu",
        Escola: "Dojô Matsuda",
        Jogador: "NPC",
        Assinatura: "Beleza eletrizante",
        Conceito: "Lutadora Elétrica",
        Cronica: "Street Fighter 5",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 5,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 1,
        Manha: 5,
        Labia: 5,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 3,
        Seguranca: 1,
        Furtividade: 1,
        Sobrevivencia: 1,
        Arena: 3,
        Computador: 1,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 1,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 6,
        Esportes: 5,
        Foco: 4,
        ManobrasEspeciais: "Jump, Sonic Boom, Dislocate Limb, Thigh Press, Pile Driver, Spinning Pile Driver, Wheel Kick, Throw, Suplex, Foot Sweep, Shock Treatment, Air Throw, Pin, Improved Pin, Grappling Defense, Light Feet, Power Up, Elbow Smash, Condensed Energy, Esquives",
        Combos: "Dislocate Limb para Thigh Press (Dizzy); Dislocate Limb para Pile Driver (Dizzy); Spinning Pile Driver para Pin;",
        Gloria: 7,
        Honra: 7,
        Chi: 6,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 7
    };
    return calcPC(laura);
}
const npc = Laura();