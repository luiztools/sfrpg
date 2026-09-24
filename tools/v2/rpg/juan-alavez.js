function Juan() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 5);
    antecedentes[2] = newCaracteristica("Fama", 1);

    const personagem = {
        Nome: "Juan 'Índio' Alavez",
        Estilo: "Jeet Kune Dô",
        Escola: "O Mundo",
        Jogador: "NPC",
        Assinatura: "Alegria pura",
        Conceito: "Errante",
        Cronica: "",
        Forca: 4,
        Destreza: 4,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Intimidacao: 2,
        Perspicacia: 4,
        Manha: 3,
        Labia: 2,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 1,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 4,
        Computador: 1,
        Investigacao: 1,
        Medicina: 1,
        Misterios: 1,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 4,
        Bloqueio: 3,
        Apresamento: 3,
        Esportes: 4,
        Foco: 1,
        ManobrasEspeciais: "Dragon Punch, Power Uppercut, Jump, Foot Sweep, Cartwheel Kick, Throw, Backflip Kick, Pin, Kick Defense, Double-Hit Kick, Kippup",
        Combos: "Bloqueio para Backflip Kick; Movimento para Cartwheel Kick para Dragon Punch (Dizzy), Bloqueio para Throw para Pin (Dizzy)",
        Gloria: 5,
        Honra: 7,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 15,
        Divisao: "Estilo Livre",
        Posto: 6
    };
    return personagem;
}

//Condensed Energy
let npc = Juan();
npc = calcPC(npc);