function Urien() {
    var antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Aliados", 5);
    antecedentes[2] = newCaracteristica("Contatos", 5);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    antecedentes[4] = newCaracteristica("Staff", 5);
    antecedentes[5] = newCaracteristica("Elemental", 3);

    var urien =
    {
        Nome: "Urien",
        Estilo: "Pankration",
        Escola: "Illuminati",
        Equipe: "Illuminati",
        Time: "Illuminati",
        Conceito: "Usurpador",
        Assinatura: "Onda de choque",
        Jogador: "NPC",
        Cronica: "Street Fighter 5",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Aparencia: 5,
        Manipulacao: 4,
        Percepcao: 5,
        Inteligencia: 6,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 4,
        Intimidacao: 5,
        Perspicacia: 4,
        Manha: 3,
        Labia: 5,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 4,
        Computador: 5,
        Investigacao: 4,
        Medicina: 5,
        Misterios: 5,
        Estilos: 5,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 4,
        Foco: 6,
        Gloria: 9,
        Honra: 0,
        Chi: 9,
        ForcaVontade: 10,
        Divisao: "Estilo Livre",
        Antecedentes: antecedentes,
        ManobrasEspeciais: "Accuracy, Body Check, Condensed Energy, Sniper Kick, Elbow Smash, Foot Sweep, Maka Wara, Neck Choke, Pile Driver, Power Uppercut, Shockwave, Stone, Wall, Fist Sweep, Double Hit Kick, Aegis Reflector",
        Combos: "Body Check para Aegis Reflector para Neck Choke (Dizzy); Body Check para Body Check; Condensed Stone para Sniper Kick (Dizzy)",
        Saude: 20,
        Posto: 9
    };
    return calcPC(urien);
}

const npc = Urien();