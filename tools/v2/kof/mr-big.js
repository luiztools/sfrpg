function MrBig() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Apoio", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Contatos", 3);
    antecedentes[4] = newCaracteristica("Staff", 5);
    antecedentes[5] = newCaracteristica("Fama", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Bastão", 6);

    const armas = [];
    armas[0] = "Bastão";

    const personagem =
    {
        Nome: "Mr. Big",
        Estilo: "Bojutsu",
        Escola: "Desconhecida",
        Conceito: "Mafioso",
        Assinatura: "Gargalhada",
        Jogador: "NPC",
        Cronica: "Art of Fighting",
        Equipe: "Howard Connection",
        Time: "Howard Connection",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 4,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 3,
        Prontidao: 2,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 5,
        Labia: 0,
        LutaCega: 0,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 2,
        Investigacao: 2,
        Medicina: 0,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        Divisao: "Duelistas",
        Posto: 8,
        Gloria: 4,
        Honra: 0,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Head Butt, Jump, Flying Head Butt, Throw, Fireball, Power Uppercut, Shock Treatment, Triple Strike",
        Combos: "Fierce para Fireball para Power Uppercut (Dizzy)"
    };
    return personagem;
}

let npc = MrBig();

npc = calcPC(npc);