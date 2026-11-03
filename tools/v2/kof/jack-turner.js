function JackTurner() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 1);
    antecedentes[2] = newCaracteristica("Apoio", 1);
    antecedentes[3] = newCaracteristica("Fama", 2);

    const personagem = {
        Nome: "Jack Turner",
        Estilo: "Wrestling",
        Escola: "Desconhecida",
        Jogador: "NPC",
        Assinatura: "Grito de vitória!",
        Conceito: "Líder de Gangue",
        Cronica: "Art of Fighting",
        Equipe: "Black Cats",
        Forca: 6,
        Destreza: 3,
        Vigor: 6,
        Carisma: 1,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 2,
        Inteligencia: 2,
        Raciocinio: 3,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 5,
        Perspicacia: 0,
        Manha: 5,
        Labia: 2,
        LutaCega: 0,
        Conducao: 4,
        Lideranca: 3,
        Seguranca: 0,
        Furtividade: 0,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 3,
        Bloqueio: 4,
        Apresamento: 5,
        Esportes: 2,
        Foco: 3,
        ManobrasEspeciais: "Jump, Grappling Defense, Foot Sweep, Throw, Neck Choke, Super Drop Kick, Spinning Back Fist, Slide Kick",
        Combos: "",
        Gloria: 5,
        Honra: 2,
        Chi: 4,
        ForcaVontade: 7,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = JackTurner();

npc = calcPC(npc);
