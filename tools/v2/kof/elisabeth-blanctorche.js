function ElisabethBlanctorche() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Recursos", 5);
    antecedentes[2] = newCaracteristica("Elemental (Ar)", 3);
    antecedentes[3] = newCaracteristica("Staff", 3);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Chicote", 4);

    const armas = [];
    armas[0] = "Pingalim";

    const personagem = {
        Nome: "Elisabeth Blanctorche",
        Estilo: "Savate",
        Escola: "Professor particular",
        Jogador: "NPC",
        Assinatura: "Pose arrogante",
        Conceito: "Aristocrata",
        Cronica: "The King of Fighters",
        Equipe: "Família Blanctorche",
        Time: "Ash Team",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 2,
        Interrogacao: 2,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 1,
        Labia: 2,
        LutaCega: 2,
        Conducao: 1,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 2,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 1,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Kippup, Throw, Foot Sweep, Sonic Boom, Esquives, Elemental Stride, Sense Element, Elemental Explosion, Haymaker, Criminal Upper, Final Wave, Power Uppercut, Elemental Rage, Empty Step, Light Feet",
        Combos: "Elemental Stride para Power Uppercut (Dizzy); Haymaker para Power Uppercut (Dizzy); Elemental Stride para Criminal Upper para Elemental Rage; Jumping Forward para Sonic Boom para Criminal Upper",
        Gloria: 5,
        Honra: 9,
        Chi: 8,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 8
    };
    return personagem;
}

let npc = ElisabethBlanctorche();

npc = calcPC(npc);
