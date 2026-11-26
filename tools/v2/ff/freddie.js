function Freddie() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const npc = {
        Nome: "Freddie",
        Estilo: "Forças Especiais",
        Escola: "Fuzileiros Navais dos EUA",
        Jogador: "NPC",
        Assinatura: "Investida de ombro",
        Conceito: "Mercenário",
        Cronica: "Final Fight 2",
        Equipe: "Mad Gear",
        Time: "Mad Gear",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 2,
        Manha: 3,
        Labia: 1,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 4,
        Esportes: 5,
        Foco: 1,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Throw, Kippup, Hyper Tackle, Flying Knee Thrust, Head Butt, Suplex, Haymaker",
        Combos: "Hyper Tackle para Throw; Jab para Head Butt (Dizzy); Bloqueio para Flying Knee Thrust",
        Gloria: 3,
        Honra: 0,
        Chi: 2,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
    return npc;
}

const npc = calcPC(Freddie());
