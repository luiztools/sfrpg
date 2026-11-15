function MakiKagura() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Elemental (Ar)", 5);

    const talentos = [];
    talentos[0] = newCaracteristica("Instrução", 2);

    const personagem = {
        Nome: "Maki Kagura",
        Estilo: "Soul Power",
        Escola: "Clã Yata",
        Jogador: "NPC",
        Assinatura: "Surge ao lado da irmã",
        Conceito: "Guardiã do Selo",
        Cronica: "The King of Fighters 2003",
        Time: "Nenhum",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 4,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 2,
        Perspicacia: 5,
        Manha: 0,
        Labia: 2,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 4,
        Sobrevivencia: 0,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 3,
        Misterios: 5,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 4,
        Esportes: 5,
        Foco: 6,
        NovosTalentos: talentos,
        ManobrasEspeciais: "Jump, Throw, Telepathy, Zen No Mind, Dim Mak, Elemental Stride, Sense Element, Power Uppercut, Air Blast, Fist Sweep, Foot Sweep, Spinning Clothesline, Turbo Spinning Clothesline, Dragon Punch, Missile Reflection, Energy Reflection",
        Combos: "Jab para Jab para Jab (Dizzy); Foot Sweep para Dragon Punch (Dizzy); Throw para Turbo Spinning Clothesline (Dizzy)",
        Gloria: 2,
        Honra: 10,
        Chi: 10,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = MakiKagura();

npc = calcPC(npc);
