function MickeyRogers() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 2);
    antecedentes[1] = newCaracteristica("Arena", 2);
    antecedentes[2] = newCaracteristica("Fama", 1);

    const personagem = {
        Nome: "Mickey Rogers",
        Estilo: "Boxe",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Mostra os músculos",
        Conceito: "Órfão",
        Cronica: "Art of Fighting",
        Forca: 4,
        Destreza: 6,
        Vigor: 5,
        Carisma: 1,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 2,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 3,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 0,
        Manha: 4,
        Labia: 1,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 2,
        Sobrevivencia: 1,
        Arena: 0,
        Computador: 0,
        Investigacao: 0,
        Medicina: 1,
        Misterios: 0,
        Estilos: 1,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 0,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 4,
        Foco: 4,
        ManobrasEspeciais: "Jump, Grappling Defense, Fist Sweep, Fireball, Sonic Boom, Bear Hug, Wall Spring",
        Combos: "",
        Gloria: 3,
        Honra: 4,
        Chi: 5,
        ForcaVontade: 6,
        Saude: 15,
        Divisao: "Livre",
        Posto: 8
    };
    return personagem;
}

let npc = MickeyRogers();

npc = calcPC(npc);
