function Brian() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const personagem = {
        Nome: "Brian Battler",
        Estilo: "Wrestling",
        Escola: "Football Frenzy",
        Jogador: "NPC",
        Assinatura: "Levanta os braços",
        Conceito: "Astro do Futebol",
        Cronica: "King of Fighters",
        Forca: 6,
        Destreza: 3,
        Vigor: 7,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 5,
        Interrogacao: 2,
        Intimidacao: 5,
        Perspicacia: 1,
        Manha: 2,
        Labia: 1,
        LutaCega: 1,
        Conducao: 3,
        Lideranca: 2,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 5,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 3,
        Misterios: 1,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 5,
        Apresamento: 7,
        Esportes: 4,
        Foco: 0,
        ManobrasEspeciais: "Jump, Head Butt, Throw, Flying Head Butt, Hyper Tackle, Flying Body Spear, Jumping Shoulder Butt, Buffalo Punch, Suplex, Pile Driver, Argentine Back Breaker, Flying Tackle",
        Combos: "Buffalo Punch para Suplex (Dizzy); Jump para Head Butt; Buffalo Punch para Pile Driver para Pile Driver (Dizzy); Buffalo Punch para Pile Driver para Throw (Dizzy); Hyper Tackle para Hyper Tackle para Hyper Tackle (Dizzy); Flying Tackle para Pile Driver para Pile Driver (Dizzy)",
        Gloria: 9,
        Honra: 6,
        Chi: 2,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Tradicional",
        Posto: 8
    };
    return personagem;
}

let npc = Brian();
npc = calcPC(npc);