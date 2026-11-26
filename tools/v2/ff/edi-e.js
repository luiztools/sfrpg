function EdiE() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Apoio", 1);
    antecedentes[2] = newCaracteristica("Arena", 3);
    antecedentes[3] = newCaracteristica("Contatos", 3);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    const tecnicas = [
        newCaracteristica("Bastão", 5),
        newCaracteristica("Armas de Fogo", 5)
    ];
    const armas = ["Tonfa de Ferro", "Pistola Pesada"];

    const npc = {
        Nome: "Edi E.",
        Estilo: "Forças Especiais",
        Jogador: "NPC",
        Assinatura: "Cospe o Chiclete",
        Conceito: "Policial Corrupto",
        Cronica: "Final Fight 1",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
        Forca: 5,
        Destreza: 3,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 5,
        Intimidacao: 3,
        Perspicacia: 2,
        Manha: 4,
        Labia: 4,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 4,
        Seguranca: 4,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Computador: 2,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 2,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 3,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Buffalo Punch, Triple Strike",
        Combos: "Jump + Tonfa de Ferro Fierce para Tonfa de Ferro Strong (Dizzy), Tonfa de Ferro Jab para Tonfa de Ferro Jab para Tonfa de Ferro Berserk (Dizzy), Tonfa de Ferro Strong para Tonfa de Ferro Strong para Tonfa de Ferro Berserk (Dizzy)",
        Gloria: 1,
        Honra: 0,
        Chi: 1,
        ForcaVontade: 6,
        Saude: 16,
        Divisao: "Duelistas",
        Posto: 4
    };
    return npc;
}

const npc = calcPC(EdiE());