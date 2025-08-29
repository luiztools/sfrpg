function LiuKangMk3() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 5);
    antecedentes[2] = newCaracteristica("Fama", 2);

    const personagem = {
        Nome: "Liu Kang",
        Estilo: "Kung Fu",
        Escola: "Templo da Luz",
        Jogador: "NPC",
        Assinatura: "Cumprimento oriental",
        Conceito: "Monge",
        Cronica: "Mortal Kombat",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 2,
        Labia: 0,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 2,
        Arena: 3,
        Computador: 0,
        Investigacao: 1,
        Medicina: 2,
        Misterios: 2,
        NovosTalentos: [newCaracteristica("Instrução", 2)],
        Estilos: 5,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 6,
        Bloqueio: 5,
        Apresamento: 3,
        Esportes: 4,
        Foco: 5,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Power Uppercut, Throw, Fireball, Flying Kick, Flying Fireball, Bicycle Kick, Dragon Attack, Back Roll Throw, Air Throw, Double-Hit Kick",
        Combos: " Strong para Strong para Foot Sweep; Flying Kick para Bicycle Kick (dizzy); Short para Short para Double-Hit Kick (dizzy); Jab para Jab para Short (dizzy)",
        Gloria: 8,
        Honra: 6,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Estilo Livre",
        Posto: 9
    };
    return personagem;
}

let npc = LiuKangMk3();
npc = calcPC(npc);