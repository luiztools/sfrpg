function Sotiropoulos() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 5);
    antecedentes[1] = newCaracteristica("Sensei", 4);
    antecedentes[2] = newCaracteristica("Staff", 5);
    antecedentes[3] = newCaracteristica("Fama", 3);
    antecedentes[4] = newCaracteristica("Satsui no Hadou", 1);
    antecedentes[5] = newCaracteristica("Empresário", 4);

    const sotiropoulos = {
        Nome: "George Sotiropoulos",
        Estilo: "Vale-Tudo (Jiu Jitsu)",
        Escola: "Academia de Erastus",
        Jogador: "NPC",
        Assinatura: "Polegar para baixo",
        Conceito: "ex-Lutador Olímpico",
        Equipe: "Fernando Degaul",
        Time: "Nenhum",
        Forca: 5,
        Destreza: 4,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 3,
        Intimidacao: 4,
        Perspicacia: 3,
        LutaCega: 1,
        Conducao: 3,
        Sobrevivencia: 3,
        Arena: 3,
        Medicina: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 2,
        Chute: 2,
        Bloqueio: 2,
        Apresamento: 4,
        Esportes: 2,
        Foco: 1,
        ManobrasEspeciais: "Pin, Improved Pin, Neck Choke, Suplex, Dislocate Limb, Throw, Grappling Defense",
        Combos: "",
        Gloria: 5,
        Honra: 1,
        Chi: 1,
        ForcaVontade: 7,
        Saude: 12,
        Divisao: "Tradicional",
        Posto: 3
    };
    return sotiropoulos;
}

let npc = Sotiropoulos();

npc = calcPC(npc);