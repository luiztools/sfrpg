function KatarinaTk4() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 1);
    antecedentes[1] = newCaracteristica("Contatos", 2);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Recursos", 1);

    return {
        Nome: "Katarina Alves",
        Estilo: "Savate",
        Escola: "Autodidata",
        Jogador: "NPC",
        Assinatura: "Bate a sola do sapato no chão e manda o adversário levantar",
        Conceito: "Órfã à procura do pai adotivo",
        Cronica: "Tekken 7",
        Forca: 4,
        Destreza: 5,
        Vigor: 4,
        Carisma: 3,
        Manipulacao: 2,
        Aparencia: 4,
        Percepcao: 4,
        Inteligencia: 2,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 4,
        Labia: 2,
        LutaCega: 2,
        Conducao: 2,
        Lideranca: 1,
        Seguranca: 1,
        Furtividade: 2,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 1,
        Investigacao: 3,
        Medicina: 1,
        Misterios: 0,
        Estilos: 2,
        Antecedentes: antecedentes,
        Soco: 3,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 2,
        Esportes: 5,
        Foco: 1,
        ManobrasEspeciais: "Jump, Kippup, Throw, Double Hit Kick, Reverse Frontal Kick, Stepping Front Kick, Lightning Leg, Ax Kick, Slide Kick, Foot Sweep, Knee Basher, Spinning Back Fist, Haymaker, Kick Defense",
        Combos: "Reverse Frontal Kick para Lightning Leg, Double Hit Kick para Ax Kick (Dizzy), Kick Defense para Stepping Front Kick, Spinning Back Fist para Slide Kick",
        Gloria: 3,
        Honra: 4,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 18,
        Divisao: "Livre",
        Posto: 6
    };
}

let npc = KatarinaTk4();
npc = calcPC(npc);
