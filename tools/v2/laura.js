function Laura() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 2);
    antecedentes[1] = newCaracteristica("Aliados", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 3);
    antecedentes[4] = newCaracteristica("Sensei", 3);
    antecedentes[5] = newCaracteristica("Elemental", 2);

    var laura =
    {
        Nome: "Laura Matsuda",
        Estilo: "Jiu Jitsu",
        Escola: "Dojô Matsuda",
        Conceito: "Lutadora Elétrica",
        Assinatura: "Bonita!",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 7,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 2,
        Intimidacao: 3,
        Manha: 5,
        Labia: 5,
        LutaCega: 1,
        Conducao: 2,
        Lideranca: 3,
        Furtividade: 1,
        Arena: 3,
        Investigacao: 1,
        Misterios: 1,
        Estilos: 3,
        Sobrevivencia: 1,
        Seguranca: 1,
        Computador: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 5,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Light Feet, Power Up, Short Fireball, Elbow Smash, Thigh Press, Pile Driver, Spinning Pile Driver, Wheel Kick, Throw, Condensed Energy, Suplex, Foot Sweep, Esquives, Shock Treatment, Air Throw, Pin, Improved Pin, Grappling Defense",
        Combos: "Elbow Smash para Thigh Press (Dizzy); Elbow Smash para Pile Driver (Dizzy), Power Up para Short Fireball; Power Up para Spinning Pile Driver; Elbow Smash para Throw (Dizzy); Elbow Smash para Elbow Smash; Jab para Jab; Elbow Smash para Short; Elbow Smash para Pile Driver; Elbow Smash para Spinning Pile Driver; Spinning Pile Driver para Pin; Spinning Pile Driver para Improved Pin",
        Chi: 5,
        ForcaVontade: 9,
        Saude: 20,
        Posto: 9,
        Gloria: 8,
        Honra: 4,
        Divisao: "Estilo Livre"
    };
    return calcPC(laura);
}
const npc = Laura();