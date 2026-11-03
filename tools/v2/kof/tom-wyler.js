function TomWyler() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Contatos", 3);
    antecedentes[2] = newCaracteristica("Recursos", 3);

    const personagem = {
        Nome: "Tom Wyler",
        Estilo: "Kickboxe",
        Escola: "Nenhuma",
        Jogador: "NPC",
        Assinatura: "Grito de vitória!",
        Conceito: "Lutador",
        Cronica: "Art of Fighting 3",
        Forca: 7,
        Destreza: 4,
        Vigor: 7,
        Carisma: 1,
        Manipulacao: 3,
        Aparencia: 4,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 6,
        Perspicacia: 3,
        Manha: 3,
        Labia: 0,
        LutaCega: 4,
        Conducao: 0,
        Lideranca: 5,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 4,
        Arena: 3,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 4,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 6,
        Apresamento: 5,
        Esportes: 5,
        Foco: 3,
        ManobrasEspeciais: "Jump, Foot Sweep, Power Charge, Reverse Frontal Kick, Breakfall",
        Combos: "",
        Gloria: 7,
        Honra: 1,
        Chi: 4,
        ForcaVontade: 10,
        Saude: 20,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = TomWyler();

npc = calcPC(npc);
