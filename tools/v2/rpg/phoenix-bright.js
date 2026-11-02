function PhoenixBright() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 1);
    antecedentes[1] = newCaracteristica("Elemental", 4);
    antecedentes[2] = newCaracteristica("Sensei", 3);

    const phoenix = {
        Nome: "Phoenix Bright",
        Estilo: "Kung Fu",
        Escola: "Portland",
        Jogador: "NPC",
        Assinatura: "Paz e Amor!",
        Conceito: "Elemental",
        Equipe: "Nenhuma",
        Time: "Nenhum",
        Forca: 3,
        Destreza: 5,
        Vigor: 3,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 1,
        Inteligencia: 3,
        Raciocinio: 2,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 1,
        Perspicacia: 1,
        Manha: 3,
        Labia: 1,
        LutaCega: 2,
        Conducao: 1,
        Furtividade: 2,
        Sobrevivencia: 2,
        Arena: 1,
        Investigacao: 1,
        Medicina: 1,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 2,
        Bloqueio: 1,
        Apresamento: 1,
        Esportes: 2,
        Foco: 4,
        ManobrasEspeciais: "Throw, Jump, Triple Strike, Backflip Kick, Fireball, Maka Wara, Drunken Monkey Roll, Fire Strike",
        Combos: "Drunken Monkey Roll para Backflip Kick para Fire Strike (Dizzy)",
        Gloria: 1,
        Honra: 3,
        Chi: 4,
        ForcaVontade: 3,
        Saude: 10,
        Divisao: "Tradicional",
        Posto: 4
    };
    return phoenix;
}

let npc = PhoenixBright();

npc = calcPC(npc);