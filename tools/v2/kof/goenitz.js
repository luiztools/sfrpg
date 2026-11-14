function Goenitz() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Elemental (Ar)", 6);
    antecedentes[2] = newCaracteristica("Sangue de Orochi", 5);
    antecedentes[3] = newCaracteristica("Recursos", 5);
    antecedentes[4] = newCaracteristica("Arena", 5);

    const personagem = {
        Nome: "Goenitz",
        Estilo: "Kickboxe",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Ventos para todos os lados!",
        Conceito: "Guardião dos Ventos",
        Cronica: "The King of Fighters",
        Equipe: "Hakkesshu",
        Time: "Hakkesshu",
        Forca: 5,
        Destreza: 6,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 4,
        Aparencia: 3,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 5,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 4,
        Manha: 5,
        Labia: 5,
        LutaCega: 5,
        Conducao: 0,
        Lideranca: 4,
        Seguranca: 0,
        Furtividade: 5,
        Sobrevivencia: 5,
        Arena: 6,
        Computador: 0,
        Investigacao: 4,
        Medicina: 3,
        Misterios: 8,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 6,
        Chute: 4,
        Bloqueio: 6,
        Apresamento: 5,
        Esportes: 5,
        Foco: 7,
        ManobrasEspeciais: "Jump, Throw, Criminal Upper, Foot Sweep, Sense Orochi, Rekka Ken, Awakening Blood, Push, Flight, Kippup, Lightness, Air Blast, Widowmaker, Haymaker",
        Combos: "Rekka Ken Strong para Rekka Ken Strong para Widowmaker (Dizzy); Criminal Upper para Criminal Upper para Criminal Upper (Dizzy)",
        Gloria: 9,
        Honra: 4,
        Chi: 10,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = Goenitz();

npc = calcPC(npc);
