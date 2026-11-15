function Mukai() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Apoio", 3);
    antecedentes[2] = newCaracteristica("Elemental (Terra)", 5);

    const personagem = {
        Nome: "Mukai",
        Estilo: "Pankration",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Forma sombria de pedra",
        Conceito: "Membro d'Aqueles do Passado",
        Cronica: "The King of Fighters",
        Equipe: "Aqueles do Passado",
        Time: "Nenhum",
        Forca: 6,
        Destreza: 4,
        Vigor: 6,
        Carisma: 3,
        Manipulacao: 3,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 1,
        Intimidacao: 5,
        Perspicacia: 3,
        Manha: 1,
        Labia: 1,
        LutaCega: 3,
        Conducao: 0,
        Lideranca: 2,
        Seguranca: 2,
        Furtividade: 1,
        Sobrevivencia: 4,
        Arena: 2,
        Computador: 0,
        Investigacao: 1,
        Medicina: 0,
        Misterios: 5,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 5,
        Esportes: 3,
        Foco: 5,
        ManobrasEspeciais: "Jump, Slide Kick, Elemental Skin, Sense Element, Stunning Shout, Wall, Wounded Knee, Haymaker, Power Uppercut, Stone, Elemental Rage, Air Smash",
        Combos: "Elemental Rage para Haymaker; Wounded Knee para Wounded Knee (Dizzy); Elemental Explosion (Dizzy)",
        Gloria: 8,
        Honra: 4,
        Chi: 8,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Mukai();

npc = calcPC(npc);
