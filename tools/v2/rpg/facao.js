function Facao() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Arena", 1);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Fama", 1);
    antecedentes[4] = newCaracteristica("Recursos", 1);
    antecedentes[5] = newCaracteristica("Staff", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Faca", 5);

    const armas = [];
    armas[0] = "Faca";

    const facao =
    {
        Nome: "Nei 'Facão' Cruz",
        Estilo: "Maculelê",
        Time: "Terceiro Comando",
        Equipe: "Terceiro Comando",
        Conceito: "Cobrador de Dívidas",
        Assinatura: "Risca o chão em cruz",
        Jogador: "NPC",
        Cronica: "Nenhuma",
        Forca: 5,
        Destreza: 3,
        Vigor: 6,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 5,
        Labia: 3,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 3,
        Seguranca: 4,
        Furtividade: 0,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        NovasTecnicas: tecnicas,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 2,
        Esportes: 4,
        Foco: 1,
        Armas: armas,
        Gloria: 7,
        Honra: 1,
        Chi: 2,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Duelistas",
        Posto: 6,
        ManobrasEspeciais: "Jump, Rolling Attack, Double Hit Knee, Forward Flip Knee, Power Uppercut, Buffalo Punch, Musical Accompaniment",
        Combos: "Bloqueio para Faca Strong; Bloqueio para Faca Fierce para Faca Jab (Dizzy)"
    };
    return facao;
}

let npc= Facao();
npc = calcPC(npc);