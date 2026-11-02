function QuinzeKiet() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Contatos", 2);
    antecedentes[3] = newCaracteristica("Fama", 2);
    antecedentes[4] = newCaracteristica("Sensei", 5);
    antecedentes[5] = newCaracteristica("Satsui no Hadou", 2);

    const ryu = {
        Nome: "Quinze x Kiet",
        Estilo: "Karate Shotokan",
        Escola: "Dojô de Gouken",
        Jogador: "NPC",
        Assinatura: "Pura determinação",
        Conceito: "Estudante",
        Cronica: "Street Fighter Alpha",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 5,
        Intimidacao: 3,
        Perspicacia: 5,
        Manha: 2,
        Labia: 1,
        LutaCega: 4,
        Conducao: 2,
        Lideranca: 4,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 1,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 3,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 3,
        Foco: 5,
        ManobrasEspeciais: "Dragon Punch, Power Uppercut, Foot Sweep, Back Roll Throw, Throw, Hurricane Kick, Air Hurricane Kick, Fireball, Improved Fireball, Jump, Kippup",
        Combos: "Hurricane Kick para Foot Sweep, Jab para Improved Fireball (Dizzy), Short para Short para Short (Dizzy)",
        Gloria: 7,
        Honra: 9,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 18,
        Divisao: "Estilo Livre",
        Posto: 9
    };
    return ryu;
}

let npc = QuinzeKiet();

npc = calcPC(npc);