function Belger() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Arena", 3);
    antecedentes[3] = newCaracteristica("Contatos", 4);
    antecedentes[4] = newCaracteristica("Recursos", 3);

    const tecnicas = [newCaracteristica("Bastão", 5),newCaracteristica("Pistola", 5)];
    const armas = ["Bastão"];

    const npc =
    {
        Nome: "Edi E.",
        Estilo: "Forças Especiais",
        Conceito: "Policial Corrupto",
        Assinatura: "Cospe o Chiclete",
        Jogador: "NPC",
        Cronica: "Final Fight 1",
        Time: "Mad Gear",
        Equipe: "Mad Gear",
        Forca: 4,
        Destreza: 4,
        Vigor: 5,
        Carisma: 4,
        Aparencia: 1,
        Manipulacao: 5,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
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
        Misterios:0,
        Estilos: 2,
        Soco: 3,
        Chute: 2,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 3,
        Foco: 0,
        NovasTecnicas: tecnicas,
        Antecedentes: antecedentes,
        Armas: armas,
        ManobrasEspeciais: "Jump, Buffalo Punch, Triple Strike",
        Combos: "Jump + Bastão Fierce para Bastão Strong (Dizzy), Bastão Jab para Bastão Jab para Bastão Berserk (Dizzy), Bastão Strong para Bastão Strong para Bastão Berserk (Dizzy)",
        Chi: 1,
        ForcaVontade: 7,
        Saude: 14,
        Gloria: 6,
        Honra: 1,
        Posto: 4,
        Divisao: "Duelistas"
    };
    return npc;
}

const npc = calcPC(Belger());