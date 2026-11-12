function AKISF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Contatos", 5);
    antecedentes[1] = newCaracteristica("Elemental (Água)", 5);
    antecedentes[2] = newCaracteristica("Sensei", 4);

    const armas = [];
    armas[0] = "Shuko";

    const personagem = {
        Nome: "A.K.I.",
        Estilo: "Kung Fu",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Movimentos serpenteantes",
        Conceito: "Assassina",
        Cronica: "Street Fighter 6",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 5,
        Aparencia: 5,
        Percepcao: 5,
        Inteligencia: 4,
        Raciocinio: 4,
        Prontidao: 5,
        Interrogacao: 3,
        Intimidacao: 4,
        Perspicacia: 4,
        Manha: 4,
        Labia: 3,
        LutaCega: 3,
        Conducao: 1,
        Lideranca: 0,
        Seguranca: 2,
        Furtividade: 5,
        Sobrevivencia: 3,
        Arena: 1,
        Computador: 1,
        Investigacao: 2,
        Medicina: 5,
        Misterios: 5,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 5,
        Apresamento: 4,
        Esportes: 6,
        Foco: 5,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Drunken Monkey Roll, Fireball, Drench, Envelop, Drain, Air Smash, Acid Breath, Bear Hug, Spinning Back Fist, Handstand Kick, Chi Kun Healing, Dim Mak, Double Hit Kick, Ducking Fierce",
        Combos: "Jab para Strong para Fierce (Dizzy); Fireball para Drunken Monkey Roll para Forward (Dizzy); Drunken Monkey Roll para Ducking Fierce; Handstand Kick para Envelop (Dizzy); Drunken Monkey Roll para Bear Hug",
        Gloria: 7,
        Honra: 1,
        Chi: 9,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Duelistas",
        Posto: 6
    };
    return personagem;
}

let npc = AKISF6();

npc = calcPC(npc);
