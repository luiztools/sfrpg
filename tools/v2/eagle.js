function EagleZ3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Apoio", 4);
    antecedentes[2] = newCaracteristica("Arena", 3);
    antecedentes[3] = newCaracteristica("Contatos", 5);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    const tecnicas = [newCaracteristica("Bastão", 5)];
    const armas = ["Tonfa de Ferro"];

    const npc = {
        Nome: "Eagle",
        Estilo: "Forças Especiais (Bojutsu)",
        Jogador: "NPC",
        Assinatura: "Cruza as tonfas",
        Conceito: "Agente secreto",
        Cronica: "Street Fighter Alpha",
        Equipe: "MI6",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 3,
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
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Buffalo Strike, Triple Blow, Weapon Sweep, Energy Reflection, Missile Reflection",
        Combos: "Jump + Bastão Fierce para Bastão Strong (Dizzy), Bastão Jab para Bastão Jab para Bastão Berserk (Dizzy), Bastão Strong para Bastão Strong para Bastão Berserk (Dizzy), Bastão Fierce para Bastão Fierce para Bastão Berserk (Dizzy), Aparar para Triple Blow",
        Gloria: 6,
        Honra: 5,
        Chi: 2,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 9
    };
    return npc;
}

let npc = EagleZ3();
npc = calcPC(npc);