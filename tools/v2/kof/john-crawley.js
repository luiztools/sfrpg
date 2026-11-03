function JohnCrawley() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 5);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Recursos", 3);
    antecedentes[3] = newCaracteristica("Fama", 1);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Armas de Fogo", 3);

    const personagem = {
        Nome: "John Crawley",
        Estilo: "Forças Especiais",
        Escola: "Exército",
        Jogador: "NPC",
        Assinatura: "Ri do oponente caído",
        Conceito: "Militar Corrupto",
        Cronica: "Art of Fighting",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 3,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 5,
        Prontidao: 3,
        Interrogacao: 3,
        Intimidacao: 3,
        Perspicacia: 0,
        Manha: 2,
        Labia: 3,
        LutaCega: 0,
        Conducao: 4,
        Lideranca: 2,
        Seguranca: 3,
        Furtividade: 3,
        Sobrevivencia: 2,
        Arena: 0,
        Computador: 2,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 0,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 4,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 5,
        NovasTecnicas: tecnicas,
        ManobrasEspeciais: "Jump, Grappling Defense, Foot Sweep, Throw, Wall Spring, Slide Kick, Fireball, Flying Body Spear",
        Combos: "",
        Gloria: 6,
        Honra: 2,
        Chi: 5,
        ForcaVontade: 6,
        Saude: 17,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = JohnCrawley();

npc = calcPC(npc);
