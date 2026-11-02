function LotusBlossom() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 3);
    antecedentes[1] = newCaracteristica("Recursos", 2);
    antecedentes[2] = newCaracteristica("Empresario", 4);
    antecedentes[3] = newCaracteristica("Aliados", 4);
    antecedentes[4] = newCaracteristica("Staff", 3);
    antecedentes[5] = newCaracteristica("Contatos", 3);

    const lotus = {
        Nome: "Lótus Blossom",
        Estilo: "Kung Fu",
        Escola: "Shadaloo",
        Jogador: "NPC",
        Assinatura: "Manda um beijo",
        Conceito: "Mercenária",
        Equipe: "Fernando Degaul",
        Time: "Os Presságios",
        Forca: 2,
        Destreza: 3,
        Vigor: 3,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Interrogacao: 3,
        Perspicacia: 2,
        Manha: 3,
        Labia: 2,
        Seguranca: 2,
        Furtividade: 2,
        Arena: 2,
        Computador: 2,
        Investigacao: 2,
        Misterios: 3,
        Antecedentes: antecedentes,
        Chute: 2,
        Bloqueio: 3,
        Esportes: 2,
        Foco: 2,
        ManobrasEspeciais: "Double Hit Kick, Cobra Charm, Jump",
        Combos: "Bloqueio para Double Hit Kick",
        Gloria: 3,
        Chi: 4,
        ForcaVontade: 3,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 1
    };
    return lotus;
}

let npc = LotusBlossom();

npc = calcPC(npc);