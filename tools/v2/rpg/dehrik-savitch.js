function DehrikSavitch() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Sensei", 3);
    antecedentes[2] = newCaracteristica("Empresario", 1);

    const dehrik = {
        Nome: "Dehrik Savitch",
        Estilo: "Karate Shotokan",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Grito da vitória",
        Conceito: "Ex-valentão das ruas",
        Equipe: "Gordon Produções",
        Time: "Os Corvos",
        Forca: 4,
        Destreza: 3,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Intimidacao: 1,
        Perspicacia: 2,
        Manha: 3,
        Conducao: 2,
        Lideranca: 2,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 2,
        Investigacao: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 1,
        Bloqueio: 1,
        Apresamento: 2,
        Esportes: 2,
        ManobrasEspeciais: "Power Uppercut, Triple Strike, Jump, Throw, Back Roll Throw",
        Combos: "Jab para Back Roll Throw (Dizzy)",
        Gloria: 2,
        Honra: 1,
        Chi: 3,
        ForcaVontade: 4,
        Saude: 10,
        Divisao: "Estilo Livre",
        Posto: 1
    };
    return dehrik;
}

let npc = DehrikSavitch();

npc = calcPC(npc);