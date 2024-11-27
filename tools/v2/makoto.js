function MakotoSF4() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 1);
    antecedentes[1] = newCaracteristica("Aliados", 1);

    var makoto =
    {
        Nome: "Makoto Rindou",
        Estilo: "Karatê Rindoukan",
        Assinatura: "Gi largo",
        Escola: "Dojô Rindou",
        Conceito: "Salvadora",
        Posto: 9,
        Divisao: "Tradicional",
        Jogador: "NPC",
        Cronica: "Street Fighter 4",
        Equipe: "Nenhuma",
        Antecedentes: antecedentes,
        Saude: 20,
        ForcaVontade: 10,
        Chi: 4,
        Honra: 7,
        Gloria: 8,
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 5,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 1,
        Labia: 1,
        LutaCega: 5,
        Lideranca: 4,
        Seguranca: 1,
        Arena: 4,
        Computador: 2,
        Medicina: 3,
        Estilos: 3,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 3,
        Foco: 2,
        ManobrasEspeciais: "Axe Kick, Capture Punch, Double Hit Kick, Ducking Fierce, Fist Sweep, Forward Foot Sweep, Gale Punch, Headbutt, Jump, Ki Strike, Kippup, Knife Hand Chop, Knife Hand Strike, Dirty Fighting, Neck Crush, Power Uppercurt, Rising Wind Punch, Stepping Crescent, Vital Crush",
        Combos: "Neck Crush para Knife Hand Chop; Short para Gale Punch; Fierce para Fierce para Fierce (Dizzy); Neck Crush para Fierce para Gale Punch (Dizzy); Short para Forward"
    };
    return calcPC(makoto);
}

const npc = MakotoSF4();