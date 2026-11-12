function KimberlySF6() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 3);
    antecedentes[1] = newCaracteristica("Arena", 3);
    antecedentes[2] = newCaracteristica("Fama", 1);
    antecedentes[3] = newCaracteristica("Sensei", 5);

    const tecnicas = [];
    tecnicas[0] = newCaracteristica("Arremesso", 4);

    const armas = [];
    armas[0] = "Granada";

    const personagem = {
        Nome: "Kimberly",
        Estilo: "Ninjitsu",
        Escola: "Professor Particular (Guy)",
        Jogador: "NPC",
        Assinatura: "Faz pichações",
        Conceito: "Prodígio",
        Cronica: "Street Fighter 6",
        Forca: 4,
        Destreza: 6,
        Vigor: 4,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 5,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 1,
        Perspicacia: 4,
        Manha: 4,
        Labia: 4,
        LutaCega: 4,
        Conducao: 1,
        Lideranca: 2,
        Seguranca: 4,
        Furtividade: 5,
        Sobrevivencia: 0,
        Arena: 2,
        Computador: 2,
        Investigacao: 3,
        Medicina: 2,
        Misterios: 3,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 7,
        Foco: 3,
        NovasTecnicas: tecnicas,
        Armas: armas,
        ManobrasEspeciais: "Jump, Foot Sweep, Throw, Suplex, Air Suplex, Elbow Smash, Slide Kick, Heel Stamp, Hurricane Kick, Bushin Sempu Kyaku, Choke Throw, Dive Kick, Forward Flip Knee, Light Feet, Musical Accompaniment",
        Combos: "Heel Stamp para Dive Kick (Dizzy); Elbow Smash para Heel Stamp; Heel Stamp para Choke Throw; Granada para Bushin Sempu Kyaku",
        Gloria: 6,
        Honra: 7,
        Chi: 4,
        ForcaVontade: 8,
        Saude: 20,
        Divisao: "Livre",
        Posto: 6
    };
    return personagem;
}

let npc = KimberlySF6();

npc = calcPC(npc);
