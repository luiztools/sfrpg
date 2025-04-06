function HwaJai() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Recursos", 3);
    antecedentes[1] = newCaracteristica("Fama", 2);
    antecedentes[2] = newCaracteristica("Apoio", 4);

    const personagem =
    {
        Nome: "Hwa Jai",
        Estilo: "Thai Kickboxe",
        Escola: "Desconhecida",
        Conceito: "Lutador vingativo",
        Assinatura: "Alcoolismo",
        Jogador: "NPC",
        Cronica: "Fatal Fury",
        Equipe: "Howard Connection",
        Time: "Howard Connection",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 2,
        Manipulacao: 2,
        Aparencia: 2,
        Percepcao: 3,
        Inteligencia: 3,
        Raciocinio: 4,
        Prontidao: 4,
        Interrogacao: 0,
        Intimidacao: 3,
        Perspicacia: 3,
        Manha: 2,
        Labia: 2,
        LutaCega: 0,
        Conducao: 0,
        Lideranca: 1,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 3,
        Arena: 2,
        Computador: 0,
        Investigacao: 0,
        Medicina: 2,
        Misterios: 1,
        Estilos: 3,
        Antecedentes: antecedentes,
        Soco: 4,
        Chute: 6,
        Bloqueio: 4,
        Apresamento: 3,
        Esportes: 5,
        Foco: 4,
        Divisao: "Tradicional",
        Posto: 8,
        Gloria: 7,
        Honra: 1,
        Chi: 5,
        ForcaVontade: 7,
        Saude: 20,
        ManobrasEspeciais: "Jump, Foot Sweep, Elbow Smash, Throw, Flying Knee Thrust, Triple Strike, Regeneration, Maka Wara, Slash Kick, Wheel Kick, Tiger Knee, Dive Kick, Kick Defense",
        Combos: "Triple Strike – Power Uppercut (dizzy); Tiger Knee – Triple Strike - Wheel Kick;"
    };
    return personagem;
}

let npc = HwaJai();

npc = calcPC(npc);