function AkaZahn() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Aliados", 5);
    antecedentes[3] = newCaracteristica("Recursos", 4);
    antecedentes[4] = newCaracteristica("Staff", 5);
    antecedentes[5] = newCaracteristica("Psycho Power", 3);

    const akaZahn = {
        Nome: "Aka Zahn",
        Estilo: "Ler Drit",
        Escola: "Ordem da Perpétua Escuridão",
        Jogador: "NPC",
        Assinatura: "Cumprimenta e sorri",
        Conceito: "Arquitheão",
        Equipe: "Shadaloo",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 4,
        Vigor: 5,
        Carisma: 4,
        Manipulacao: 5,
        Aparencia: 1,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 2,
        Interrogacao: 1,
        Intimidacao: 4,
        Perspicacia: 3,
        Manha: 1,
        Labia: 5,
        LutaCega: 3,
        Lideranca: 5,
        Seguranca: 3,
        Furtividade: 1,
        Computador: 2,
        Medicina: 1,
        Misterios: 4,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 3,
        Bloqueio: 3,
        Apresamento: 2,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Ducking Fierce, Double Hit Kick, Scissor Kick, Cobra Charm, Psychic Vise, Jump, Psychokinetic Channeling, Mind Reading, Telepathy, Mind Control",
        Combos: "Bloqueio para Scissor Kick para Ducking Fierce (Dizzy); Bloqueio para Cobra Charm",
        Gloria: 3,
        Chi: 5,
        ForcaVontade: 6,
        Saude: 15,
        Divisao: "Nenhuma"
    };
    return akaZahn;
}

let npc = AkaZahn();

npc = calcPC(npc);