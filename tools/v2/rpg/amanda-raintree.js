function AmandaRaintree() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 3);
    antecedentes[1] = newCaracteristica("Recursos", 1);
    antecedentes[2] = newCaracteristica("Empresario", 1);

    const amanda = {
        Nome: "Amanda Raintree",
        Estilo: "Luta-Livre Nativo Americana",
        Escola: "Universidade de L.A.",
        Jogador: "NPC",
        Assinatura: "Grito Indígena",
        Conceito: "Indígena civilizada",
        Equipe: "Gordon Produções",
        Time: "Os Corvos",
        Forca: 4,
        Destreza: 3,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 1,
        Aparencia: 3,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 1,
        Perspicacia: 3,
        Manha: 2,
        Labia: 1,
        LutaCega: 2,
        Lideranca: 1,
        Furtividade: 3,
        Sobrevivencia: 3,
        Medicina: 2,
        Misterios: 2,
        Antecedentes: antecedentes,
        Soco: 2,
        Bloqueio: 2,
        Apresamento: 3,
        Esportes: 3,
        ManobrasEspeciais: "Throw, Jump, Neck Choke, Suplex",
        Gloria: 1,
        Honra: 2,
        Chi: 4,
        ForcaVontade: 5,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 1
    };
    return amanda;
}

let npc = AmandaRaintree();

npc = calcPC(npc);