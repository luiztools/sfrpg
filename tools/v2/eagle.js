function EagleZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Arena", 3);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    const tecnicas = [newCaracteristica("Bastão", 5)];
    const armas = ["Bastão"];

    const npc =
    {
        Nome: "Eagle",
        Estilo: "Bojutsu",
        Conceito: "Agente secreto",
        Assinatura: "Cruza as tonfas",
        Jogador: "NPC",
        Cronica: "Street Fighter Alpha",
        Time: "Nenhum",
        Equipe: "MI6",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Aparencia: 3,
        Manipulacao: 5,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 5,
        Intimidacao: 1,
        Perspicacia: 3,
        Manha: 4,
        Labia: 5,
        LutaCega: 2,
        Conducao: 4,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 1,
        Investigacao: 4,
        Medicina: 3,
        Misterios:1,
        Estilos: 2,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Antecedentes: antecedentes,
        Armas: armas,
        ManobrasEspeciais: "Jump, Buffalo Punch, Triple Strike",
        Combos: "Jump + Bastão Fierce para Bastão Strong (Dizzy), Bastão Jab para Bastão Jab para Bastão Berserk (Dizzy), Bastão Strong para Bastão Strong para Bastão Berserk (Dizzy), Bastão Fierce para Bastão Fierce para Bastão Berserk (Dizzy), Aparar para Triple Strike",
        Chi: 2,
        ForcaVontade: 9,
        Saude: 20,
        Gloria: 6,
        Honra: 5,
        Posto: 9,
        Divisao: "Duelistas"
    };
    return npc;
}

let npc = EagleZ3();
npc = calcPC(npc);