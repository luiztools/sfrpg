function JoeFF() {
    const antecedentes = [];
    antecedentes[0] = newCaracteristica("Aliados", 4);
    antecedentes[1] = newCaracteristica("Recursos", 3);
    antecedentes[2] = newCaracteristica("Arena", 2);

    const personagem = {
        Nome: "Joe Higashi",
        Estilo: "Thai Kickboxe",
        Escola: "Professor Particular",
        Jogador: "NPC",
        Assinatura: "Grito de vitória",
        Conceito: "Lutador Profissional",
        Cronica: "Fatal Fury",
        Equipe: "Fatal Fury Team",
        Time: "Fatal Fury Team",
        Forca: 5,
        Destreza: 5,
        Vigor: 5,
        Carisma: 5,
        Manipulacao: 4,
        Aparencia: 4,
        Percepcao: 3,
        Inteligencia: 4,
        Raciocinio: 5,
        Prontidao: 4,
        Interrogacao: 2,
        Intimidacao: 2,
        Perspicacia: 3,
        Manha: 3,
        Labia: 4,
        LutaCega: 3,
        Conducao: 3,
        Lideranca: 0,
        Seguranca: 0,
        Furtividade: 3,
        Sobrevivencia: 4,
        Arena: 4,
        Computador: 2,
        Investigacao: 2,
        Medicina: 2,
        Misterios: 0,
        Estilos: 4,
        Antecedentes: antecedentes,
        Soco: 5,
        Chute: 5,
        Bloqueio: 4,
        Apresamento: 4,
        Esportes: 6,
        Foco: 5,
        ManobrasEspeciais: "Flying Knee Thrust, Criminal Upper, Tiger Knee, Slash Kick, Triple Strike, Elbow Smash, Jump, Throw, Foot Sweep, Wounded Knee, Wheel Kick, Air Blast",
        Combos: "Elbow Smash para Triple Strike; Triple Strike para Criminal Upper para Tiger Knee (Dizzy); Wounded Knee para Knee Basher (Dizzy); Throw para Criminal Upper para Tiger Knee",
        Gloria: 10,
        Honra: 6,
        Chi: 7,
        ForcaVontade: 9,
        Saude: 20,
        Divisao: "Livre",
        Posto: 9
    };
    return personagem;
}

let npc = JoeFF();

npc = calcPC(npc);
