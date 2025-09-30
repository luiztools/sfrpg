function ShangTsungMK3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Apoio", 5);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 3);
    antecedentes[3] = newCaracteristica("Recursos", 3);

    const personagem = {
        Nome: "Shang Tsung",
        Estilo: "Kung Fu",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Demonstra sua supremacia",
        Conceito: "General de Shao Kahn",
        Time: "Forças do Outworld",
        Cronica: "Mortal Kombat",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 6,
        Raciocinio: 6,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 0,
        Labia: 3,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 5,
        Computador: 0,
        Investigacao: 0,
        Medicina: 3,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 5,
        Foco: 6,
        ManobrasEspeciais: "Jump, Fireball, Improved Fireball, Metamorphose, Leech, Power Uppercut, Repeating Fireball, Absorb Soul, Elbow Smash",
        Combos: "Jump + Forward para Power Uppercut; Forward para Forward para Roundhouse (Dizzy); Forward para Forward para Jab (dizzy); Jab para Jab para Power Uppercut (Dizzy);",
        Gloria: 9,
        Honra: 1,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 10
    };
    return personagem;
}

let npc = ShangTsungMK3();
npc = calcPC(npc);