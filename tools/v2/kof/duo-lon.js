function DuoLon() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Recursos", 4);
    antecedentes[2] = newCaracteristica("Apoio", 4);
    antecedentes[3] = newCaracteristica("Híbrido Animal", 2);

    const personagem = {
        Nome: "Duo Lon",
        Estilo: "Kung Fu",
        Escola: "Flying Brigands",
        Jogador: "NPC",
        Assinatura: "Cabelo preso como a cabeça de uma serpente",
        Conceito: "Assassino silencioso",
        Cronica: "The King of Fighters",
        Equipe: "Flying Brigands",
        Time: "Ash Team",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 3,
        Intimidacao: 0,
        Perspicacia: 4,
        Manha: 4,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 0,
        Computador: 1,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 4,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 0,
        Esportes: 5,
        Foco: 5,
        ManobrasEspeciais: "Jump, Kippup, Foot Sweep, Dim Mak, Extendible Limbs, Ashura Senku, Fireball, Dashing Clothesline, Yoga Teleport, Energy Ball, Hyper Tackle",
        Combos: "Strong para Strong para Strong (Dizzy); Hyper Tackle para Energy Ball; Jump + Forward para Jab para Energy Ball",
        Gloria: 4,
        Honra: 7,
        Chi: 7,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = DuoLon();

npc = calcPC(npc);
