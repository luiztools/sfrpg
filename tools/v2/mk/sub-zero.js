function Reptile() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Elemental", 5);
    antecedentes[2] = newCaracteristica("Fama", 2);
    antecedentes[3] = newCaracteristica("Herança do Clã", 5);
    antecedentes[4] = newCaracteristica("Sensei", 4);

    const tecnicas = [];
    const armas = [];

    const personagem =
    {
        Nome: "Bi \"Sub-Zero\" Han",
        Estilo: "Ninjitsu",
        Escola: "Clã Lin-Kuei",
        Equipe: "Lin-Kuei",
        Time: "Lin-Kuei",
        Conceito: "Ninja Criomante",
        Assinatura: "Frieza",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 0,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 4,
        Arena: 4,
        Computador: 0,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 3,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 5,
        Honra: 0,
        Chi: 10,
        ForcaVontade: 6,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Ice Blast, Slide Kick, Ice Ground, Ice Shower, Ice Clone",
        Combos: "Jab para Ice Blast (dizzy); Forward para Forward para Roundhouse (dizzy); Forward para Forward para Jab (dizzy); Jab para Jab para Power Uppercut (dizzy)"
    };
    return personagem;
}

let npc = calcPC(Reptile());