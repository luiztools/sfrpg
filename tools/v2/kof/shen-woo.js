function ShenWoo() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Elemental (Fogo)", 2);
    antecedentes[2] = newCaracteristica("Recursos", 2);
    antecedentes[3] = newCaracteristica("Fama", 1);

    const personagem = {
        Nome: "Shen Woo",
        Estilo: "Boxe",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Estala os punhos e chama o oponente para a briga",
        Conceito: "Brigão de rua",
        Cronica: "The King of Fighters",
        Equipe: "Nenhuma",
        Time: "Ash Team",
        Forca: 6,
        Destreza: 4,
        Vigor: 5,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 4,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 2,
        Manha: 3,
        Labia: 0,
        LutaCega: 2,
        Conducao: 3,
        Lideranca: 0,
        Seguranca: 3,
        Furtividade: 2,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 0,
        Investigacao: 2,
        Medicina: 1,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 0,
        Esportes: 4,
        Foco: 2,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Turn Punch, Dashing Punch, Spinning Back Fist, Burn Knuckle, Buffalo Punch, Power Uppercut, Haymaker, Banishing Flat, Hyper Tackle, Head Butt Hold, Power Up, Final Wave",
        Combos: "Buffalo Punch para Haymaker (Dizzy); Jab para Haymaker (Dizzy); Jab para Roundhouse para Power Uppercut; Haymaker para Final Wave",
        Gloria: 8,
        Honra: 3,
        Chi: 5,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = ShenWoo();

npc = calcPC(npc);
