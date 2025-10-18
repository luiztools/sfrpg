function Reptile() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Elemental", 5);
    antecedentes[2] = newCaracteristica("Espectro", 5);
    antecedentes[3] = newCaracteristica("Herança do Clã", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 5);

    const armas = ["Arpão"];

    const personagem =
    {
        Nome: "Hanzo \"Scorpion\" Hasashi",
        Estilo: "Ninjitsu",
        Escola: "Clã Shirai-ryu",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Conceito: "Espectro",
        Assinatura: "Levanta o braço",
        Jogador: "NPC",
        Cronica: "Mortal Kombat",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 0,
        Labia: 2,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 0,
        Investigacao: 1,
        Medicina: 3,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 5,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Back Roll Throw, Air Throw, Sakki, Deaths Visage, Shikan Ken, Sense Element, Flaming Fist, Fire Strike, Heat Wave, Spontaneous Combustion, Elemental Stride, Shrouded Moon",
        Combos: "Power Uppercut para Arpão; Shrouded Moon para Shikan-Ken para Arpão; Forward para Forward para Foot Sweep (dizzy); Jab para Jab para Forward (dizzy); Short para Short para Short (dizzy)"
    };
    return personagem;
}

let npc = calcPC(Reptile());